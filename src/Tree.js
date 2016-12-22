import isPlainObject from 'lodash/isPlainObject';
import get from 'lodash/get';
import reduce from 'lodash/reduce';
import debug from 'debug';
import parser from './parser/parser';
import Mode from './constants/Mode';

const log = debug('translate-maker');

const EMPTY_TEXT = '';

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

export default class Tree {
  constructor(translate) {
    this.translate = translate;

    this.data = {};
  }

  getOptions() {
    return this.translate.getOptions();
  }

  resolveValue(item = {}, attrs = {}) {
    const { type, path } = item;
    const options = this.getOptions();

    if (options.mode === Mode.ICU) {
      // ICU is without combinations
      if (options.references && type === 'variable') {
        return this.get(path, attrs);
      } else if (options.variables && type === 'reference') {
        return resolveVariable(attrs, path);
      }

      return undefined;
    }

    if (options.references && type === 'reference') {
      return this.get(path, attrs);
    } else if (options.variables && type === 'variable') {
      return resolveVariable(attrs, path);
    } else if (options.combinations && type === 'combination') {
      const referencePath = path[0].path;
      const variablePath = path[1].path;

      const varToRef = get(attrs, variablePath);

      const refPath = varToRef
        ? `${referencePath}.${varToRef}`
        : referencePath;

      return this.get(refPath, attrs);
    }

    return undefined;
  }

  buildText(obj, attrs, smartValue) {
    if (!obj || obj.type !== 'main') {
      return undefined;
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
    const filterFn = this.translate.getFilter(filter.type);
    const args = filter.args || [];

    return filterFn
      ? filterFn.call(this, value, part, attrs, filter.metadata, ...args)
      : value;
  }

  process(value, attrs = {}, path) {
    if (!value) {
      return value;
    }

    const { cache } = this.getOptions();
    if (cache.has(value)) {
      const data = cache.get(value);

      return this.buildText(data, attrs);
    }

    try {
      const data = parser.parse(value);
      cache.set(value, data);
      return this.buildText(data, attrs);
    } catch (err) {
      log(err.message);
      this.emit('err', err, path, value, attrs);
      return undefined;
    }
  }

  emit(...args) {
    this.translate.emit(...args);
  }

  traverse(data, path, setChild) {
    if (!path || !data) {
      return data;
    }

    const isDefault = path[0] === '_';
    const currentPath = isDefault
      ? path.substr(1)
      : path;

    if (isDefault) {
      const pos = currentPath.indexOf('.');
      const defaultChild = pos !== -1
        ? currentPath.substr(0, pos)
        : currentPath;

      if (data.defaultChild && data.defaultChild !== defaultChild) {
        throw new Error(`Default children is already set: ${data.defaultChild} ${defaultChild}`);
      }

      data.defaultChild = defaultChild;
    }

    const { children = {} } = data;
    data.children = children;

    const { dotNotation } = this.getOptions();

    const pos = currentPath.indexOf('.');
    if (dotNotation && pos !== -1) {
      const name = currentPath.substr(0, pos);
      const subPath = currentPath.substr(pos + 1);

      if (!children[name] && setChild) {
        children[name] = {};
      }

      const child = children[name];

      return this.traverse(child, subPath, setChild);
    }

    if (!children[currentPath] && setChild) {
      children[currentPath] = {};
    }

    return children[currentPath];
  }

  getDefaultValue(defaultValue, ...args) {
    const options = this.getOptions();
    const process = typeof defaultValue !== 'undefined'
      ? defaultValue
      : options.defaultValue;

    return typeof process === 'function'
      ? process(...args)
      : process;
  }

  get(path, attrs, defaultValue) {
    // user can skip attrs and use it as defaultValue
    if (typeof attrs === 'string') {
      return this.get(path, {}, attrs);
    }

    if (typeof defaultValue === 'undefined') {
      this.emit('missingdefault', path, attrs);
    }

    const { data } = this;
    let child = this.traverse(data, path);

    // autoselect defaultChild
    while (child && child.defaultChild) {
      child = child.children[child.defaultChild];
    }

    const value = child && child.value;

    if (typeof value !== 'undefined') {
      return this.process(value, attrs, path);
    }

    const currentDefaultValue = this.getDefaultValue(defaultValue, path, attrs);
    this.emit('missing', path, attrs, currentDefaultValue);

    if (typeof currentDefaultValue !== 'undefined') {
      return this.process(currentDefaultValue, attrs, path);
    }

    return undefined;
  }

  set(path, value) {
    if (!path) {
      throw new Error('Name is undefined');
    }

    if (isPlainObject(path)) {
      Object.keys(path).forEach((key) => {
        this.set(key, path[key]);
      });

      return this;
    }

    if (isPlainObject(value)) {
      Object.keys(value).forEach((key) => {
        this.set(`${path}.${key}`, value[key]);
      });

      return this;
    }

    const { data } = this;
    const child = this.traverse(data, path, true);
    child.value = value;

    return this;
  }
}
