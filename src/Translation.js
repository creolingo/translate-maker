import isPlainObject from 'lodash/lang/isPlainObject';
import startsWith from 'lodash/string/startsWith';
import find from 'lodash/collection/find';
import reject from 'lodash/collection/reject';
import get from 'lodash/object/get';
import reduce from 'lodash/collection/reduce';
import parser from './parser/parser';

const EMPTY_TEXT = '';

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

  resolveValue(item = {}, attrs = {}) {
    const { type, path } = item;
    const root = this._root;

    if (type === 'reference') {
      return root.get(path, attrs);
    } else if (type === 'variable') {
      return get(attrs, path);
    } else if (type === 'combination') {
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

    try {
      const data = parser.parse(value);
      return this.buildText(data, attrs);
    } catch (err) {
      // TODO get info about unparsable translation text
      return void 0;
    }
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

    const value = this._value;
    if (isPlainObject(value)) {
      // search default value
      const defaultChild = find(this._children, (child) => child._isDefault);
      return defaultChild ? defaultChild.get(attrs) : void 0;
    }

    return this.process(value, attrs);
  }

  set(name, value, obj) {
    if (isPlainObject(name)) {
      Object.keys(name).forEach((key) => {
        this.set(key, name[key], obj);
      });
      return this;
    }

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
