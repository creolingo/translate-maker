import isPlainObject from 'lodash/lang/isPlainObject';
import startsWith from 'lodash/string/startsWith';
import find from 'lodash/collection/find';
import reject from 'lodash/collection/reject';
import get from 'lodash/object/get';
import reduce from 'lodash/collection/reduce';
import forOwn from 'lodash/object/forOwn';
import parser from './parser/parser';
import Mode from './constants/Mode';

const EMPTY_TEXT = '';

// TODO add or syntax

function resolveVariable(obj, path) {
  const value = get(obj, path);

  if (typeof value === 'function') {
    const pos = path.indexOf('.');
    if (pos === -1) {
      return value();
    }

    const pathBefore = path.substr(0, pos);
    const fnName = path.substr(pos + 1);


    const parentObj = get(obj, pathBefore);
    return parentObj[fnName]();
  }

  return value;
}

export default class Translation {
  constructor(root, name, value) {
    const isDefault = name && startsWith(name, '_');

    this._name = isDefault ? name.substr(1) : name;
    this._value = value;
    this._root = root || this;

    this._isDefault = isDefault;
    this._children = [];

    if (isPlainObject(value)) {
      forOwn(value, (itemValue, key) => {
        this.set(key, itemValue);
      });
    }
  }

  getOptions() {
    return this._root.getOptions();
  }

  toString() {
    return this.get();
  }

  resolveValue(item = {}, attrs = {}) {
    const { type, path } = item;
    const root = this._root;
    const options = this.getOptions();

    if (options.mode === Mode.ICU) {
      // ICU is without combinations
      if (options.references && type === 'variable') {
        return root.get(path, attrs);
      } else if (options.variables && type === 'reference') {
        return resolveVariable(attrs, path);
      }

      return void 0;
    }

    if (options.references && type === 'reference') {
      return root.get(path, attrs);
    } else if (options.variables && type === 'variable') {
      return resolveVariable(attrs, path);
    } else if (options.combinations && type === 'combination') {
      const referencePath = path[0].path;
      const variablePath = path[1].path;

      const varToRef = get(attrs, variablePath);

      const refPath = varToRef
        ? `${referencePath}.${varToRef}`
        : referencePath;

      return root.get(refPath, attrs);
    }
  }

  buildText(obj, attrs, smartValue) {
    if (!obj || obj.type !== 'main') {
      return void 0;
    }

    return obj.values.map((part) => {
      const { filters } = part;
      if (part.type === 'text') {
        return part.value;
      }

      if (part.type === 'smart') {
        return smartValue;
      }

      const value = this.resolveValue(part, attrs);
      if (!filters || !filters.length) {
        return value || EMPTY_TEXT;
      }

      return reduce(filters, (reducedValue, filter) => {
        return this.applyFilter(reducedValue, part, attrs, filter);
      }, value);
    }).join('');
  }

  applyFilter(value, part, attrs, filter) {
    const root = this._root;
    const filterFn = root.getFilter(filter.type);
    const args = filter.args || [];

    return filterFn
      ? filterFn.call(this, value, part, attrs, filter.metadata, ...args)
      : value;
  }

  process(value, attrs = {}) {
    if (!value) {
      return value;
    }

    const cache = this.getOptions().cache;
    if (cache.has(value)) {
      const data = cache.get(value);
      return this.buildText(data, attrs);
    }

    try {
      const data = parser.parse(value);
      cache.set(value, data);
      return this.buildText(data, attrs);
    } catch (err) {
      // TODO get info about unparsable translation text
      return void 0;
    }
  }

  get(path, attrs = {}, defaultValue) {
    if (typeof attrs === 'string') {
      return this.get(path, {}, attrs);
    }

    if (typeof defaultValue === 'undefined') {
      return this.get(path, attrs, 'Missing translation for path: ' + path);
    }

    if (isPlainObject(path)) {
      return this.get(null, path, defaultValue);
    }

    if (path) {
      const options = this.getOptions();
      const pos = path.indexOf('.');
      if (options.dotNotation && pos !== -1) {
        const name = path.substr(0, pos);
        const newPath = path.substr(pos + 1);

        const translation = this[name];
        if (!translation) {
          // TODO get info about missing reference translation
          return this.process(defaultValue, attrs);
        }

        return translation.get(newPath, attrs, defaultValue);
      }

      if (!this[path]) {
        // TODO get info about missing reference translation
        return this.process(defaultValue, attrs);
      }

      return this[path].get(null, attrs, defaultValue);
    }

    const value = this._value;
    if (isPlainObject(value)) {
      // search default value
      const defaultChild = find(this._children, (child) => child._isDefault);
      return defaultChild ? defaultChild.get(attrs) : void 0;
    }

    return this.process(value, attrs);
  }

  set(name, value, obj) {
    if (!name) {
      throw new Error('Name is undefined');
    }

    if (isPlainObject(name)) {
      forOwn(name, (nameValue, key) => {
        this.set(key, nameValue, obj);
      });
      return this;
    }

    const options = this.getOptions();
    const pos = name.indexOf('.');
    if (options.dotNotation && pos !== -1) {
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
