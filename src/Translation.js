import isArray from 'lodash/lang/isArray';
import isPlainObject from 'lodash/lang/isPlainObject';
import startsWith from 'lodash/string/startsWith';
import find from 'lodash/collection/find';
import reject from 'lodash/collection/reject';
import trim from 'lodash/string/trim';
import get from 'lodash/object/get';
import every from 'lodash/collection/every';
import sortBy from 'lodash/collection/sortBy';
import first from 'lodash/array/first';
import filter from 'lodash/collection/filter';

const ESCAPE_CHARACTER = '\\';
const VARIABLE_START = '$';
const VARIABLE_REGEX = /{([\s\S]+?)}/g;

export default class Translation {
  constructor(root, name, value) {
    const isDefault = name && startsWith(name, '_');

    this._name = isDefault ? name.substr(1) : name;
    this._value = value;
    this._root = root || this;

    this._isDefault = isDefault;
    this._children = [];

    if (isPlainObject(value)) {
      Object.keys(value).forEach((key) => {
        this.set(key, value[key]);
      });
    }
  }

  toString() {
    return this.get();
  }

  _parseTranslation(value, callback) {
    const parts = [];
    let startIndex = 0;

    while (true) {
      const match = VARIABLE_REGEX.exec(value);
      if (!match) {
        break;
      }

      const [text, inside] = match;
      const { index } = match;
      const before = value.substr(startIndex, index - startIndex);

      startIndex = index + text.length;

      // check escape character
      if (index > 0 && value[index - 1] === ESCAPE_CHARACTER) {
        parts.push({
          isVariable: false,
          text: before.substr(0, before.length - ESCAPE_CHARACTER.length) + text,
        });

        continue;
      }

      if (before) {
        parts.push({
          isVariable: false,
          text: before,
        });
      }

      const variableName = trim(inside);
      if (!variableName) {
        continue;
      }

      const isExternal = variableName[0] === VARIABLE_START;

      parts.push({
        isVariable: true,
        isExternal,
        variable: isExternal ? variableName.substr(1) : variableName,
      });
    }

    if (startIndex >= value.length) {
      return parts;
    }

    parts.push({
      isVariable: false,
      text: value.substr(startIndex),
    });

    return parts;
  }

  _processAttrs(value, attrs = {}) {
    if (!value) {
      return value;
    }

    const root = this._root;
    const parts = this._parseTranslation(value);

    return parts.map((part) => {
      const { isVariable, text, variable, isExternal } = part;
      if (!isVariable) {
        return text;
      }

      // reference
      if (!isExternal) {
        const pos = variable.indexOf(VARIABLE_START);
        if (pos === -1) {
          return root.get(variable, attrs);
        }

        const externalVariable = variable.substr(pos + VARIABLE_START.length);

        const suffix = get(attrs, externalVariable);
        const prefix = variable.substr(0, pos - 1);

        const path = suffix ? `${prefix}.${suffix}` : prefix;

        return root.get(path, attrs);
      }

      // external variable
      return get(attrs, variable);
    }).join('');
  }

  get(path, attrs = {}) {
    if (isPlainObject(path)) {
      return this.get(null, path);
    }

    if (path) {
      const pos = path.indexOf('.');
      if (pos !== -1) {
        const name = path.substr(0, pos);
        const newPath = path.substr(pos + 1);

        const translation = this[name];
        if (!translation) {
          // TODO get info about missing reference translation
          return void 0;
        }

        return translation.get(newPath, attrs);
      }

      if (!this[path]) {
        // TODO get info about missing reference translation
        return void 0;
      }

      return this[path].get(null, attrs);
    }

    let value = this._value;

    if (isArray(value)) {
      value = this._getValueFromArray(value, attrs);
    } else if (isPlainObject(value)) {
      // search default value
      const defaultChild = find(this._children, (child) => child._isDefault);
      return defaultChild ? defaultChild.get(attrs) : void 0;
    }

    return this._processAttrs(value, attrs);
  }

  _getValueFromArray(options, attrs) {
    const pass = filter(options, (option) => {
      const isObject = isPlainObject(option);
      if (!isObject) {
        return true;
      }

      // check variables
      return every(Object.keys(option), (variableName) => {
        if (!startsWith(variableName, VARIABLE_START)) {
          return true;
        }

        const path = variableName.substr(VARIABLE_START.length);
        const currentValue = get(attrs, path);

        return option[variableName] === currentValue;
      });
    });

    // select option with more variables
    const sorted = sortBy(pass, (option) => {
      const isObject = isPlainObject(option);
      if (!isObject) {
        return 0;
      }

      return -filter(Object.keys(option), (variableName) => {
        return startsWith(variableName, VARIABLE_START);
      }).length;
    });

    const option = first(sorted);
    if (!option) {
      return void 0;
    }

    return isPlainObject(option) ? option.value : option;
  }

  set(name, value, obj) {
    if (isPlainObject(name)) {
      Object.keys(name).forEach((key) => {
        this.set(key, name[key], obj);
      });
      return this;
    }

    // TODO add dot notation
    const pos = name.indexOf('.');
    if (pos !== -1) {
      const prefix = name.substr(0, pos);
      const suffix = name.substr(pos + 1);

      const data = {
        [prefix]: {
          [suffix]: value,
        },
      };

      this.set(data, null, obj);
      return this;
    }

    const translation = new Translation(this._root, name, value);
    const key = translation._name;

    // remove old translation
    const currentTranslation = this[key];
    if (currentTranslation) {
      this._children = reject(this._children, (child) => child === currentTranslation);
    }

    // save new translation
    this._children.push(translation);
    this[key] = translation;

    if (obj) {
      obj[key] = translation;
    }

    return this;
  }
}
