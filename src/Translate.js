import Translation from './Translation';
import * as filters from './filters';
import isPlainObject from 'lodash/lang/isPlainObject';
import keys from 'lodash/object/keys';
import forOwn from 'lodash/object/forOwn';
import MemoryAdapter from './adapters/Memory';
import EventEmitter from 'events';

const defaultOptions = {
  locale: null, // current locale
  locales: null, // available locales
  namespace: null, // current namespace
  fallbacks: {},
  adapter: new MemoryAdapter({}),
  filters,
};

export default class Translate extends EventEmitter {
  constructor(options = {}, callback = () => {}) {
    super();

    this._options = {
      ...defaultOptions,
      ...options,
    };

    this._translation = new Translation(this);

    if (this._options.locale) {
      this.load(callback);
    } else if (callback) {
      callback(null, {});
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

    adapter.get(locale, namespace, (err, data = {}) => {
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
      return callback(null);
    } else if (options.locales && options.locales.indexOf(locale) === -1) {
      return callback(new Error('Locale is not allowed. Setup locales'));
    }

    this._options = {
      ...this.getOptions(),
      locale,
    };

    this._clear();
    this.load(callback);

    this.emit('locale', locale);
  }

  get(path, attrs) {
    return this._translation.get(path, attrs);
  }

  set(name, value) {
    return this._translation.set(name, value, this);
  }

  getOptions() {
    return this._options;
  }

  getAdapter() {
    return this.getOptions().adapter;
  }

  setFilter(type, fn) {
    if (isPlainObject(type)) {
      keys(type).forEach((filterType) => {
        const filter = type[filterType];

        this.setFilter(filterType, filter);
      });

      return;
    }

    this.getOptions().filters[type] = fn;
  }

  getFilter(type) {
    return this.getOptions().filters[type];
  }
}
