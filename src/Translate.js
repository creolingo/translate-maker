import Translation from './Translation';
import * as filters from './filters';
import isPlainObject from 'lodash/lang/isPlainObject';
import keys from 'lodash/object/keys';
import MemoryAdapter from './adapters/Memory';

const defaultOptions = {
  locale: null,
  namespace: null,
  adapter: new MemoryAdapter({}),
  filters,
};

export default class Translate {
  constructor(options = {}, callback = () => {}) {
    this._options = {
      ...defaultOptions,
      ...options,
    };

    this._filters = {
      ...this._options.filters,
    };

    this._translation = new Translation(this);

    if (this._options.locale) {
      this.load(callback);
    } else if (callback) {
      callback(null);
    }
  }

  _clear() {
    // todo remove current translations
    this._translation = new Translation(this);
  }

  _loadLocale(locale, namespace, callback = () => {}) {
    const adapter = this.getAdapter();
    if (!locale) {
      return callback(new Error('Locale is undefined'));
    }

    adapter.get(locale, namespace, (err, data) => {
      if (err) {
        return callback(err);
      }

      const options = this.getOptions();
      if (namespace && namespace !== options.namespace) {
        this.set(namespace, data);
      } else {
        this.set(data);
      }

      callback(null, data);
    });
  }

  load(namespace, callback) {
    if (typeof namespace === 'function') {
      return this.load(null, namespace);
    }

    const options = this.getOptions();
    this._loadLocale(options.locale, namespace || options.namespace, callback);
  }

  setLocale(locale, callback) {
    const options = this.getOptions();
    if (options.locale === locale) {
      return;
    }

    this._options = {
      ...this.getOptions(),
      locale,
    };

    this._clear();
    this.load(callback);
  }

  get(path, attrs) {
    return this._translation.get(path, attrs);
  }

  set(name, value) {
    return this._translation.set(name, value, this);
  }

  getAdapter() {
    return this.getOptions().adapter;
  }

  getOptions() {
    return this._options;
  }

  setFilter(type, fn) {
    if (isPlainObject(type)) {
      keys(type).forEach((filterType) => {
        const filter = type[filterType];

        this.setFilter(filterType, filter);
      });

      return;
    }

    this._filters[type] = fn;
  }

  getFilter(type) {
    return this._filters[type];
  }
}
