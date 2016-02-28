import Adapter from './Adapter';
import get from 'lodash/get';
import set from 'lodash/set';

const defaultOptions = {
  data: {},
};

export default class Memory extends Adapter {
  constructor(options = {}) {
    super({
      ...defaultOptions,
      ...options,
    });

    this._data = {};
  }

  getPath(locale, namespace) {
    return namespace
      ? `${namespace}.${locale}`
      : locale;
  }

  get(locale, namespace, callback) {
    if (typeof namespace === 'function') {
      return this.get(locale, void 0, namespace);
    }

    if (!locale) {
      return callback(new Error('Locale is undefined'));
    }

    const path = this.getPath(locale, namespace);

    callback(null, get(this._data, path));
  }

  set(locale, value, namespace, callback) {
    if (typeof namespace === 'function') {
      return this.set(locale, value, void 0, namespace);
    }

    if (!locale) {
      return callback(new Error('Locale is undefined'));
    }

    const path = this.getPath(locale, namespace);

    set(this._data, path, value);

    callback(null);
  }

  dehydrate() {
    return { ...this._data };
  }

  rehydrate(state) {
    this._data = state;
  }
}
