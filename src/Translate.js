import Translation from './Translation';
import * as filters from './filters';
import isPlainObject from 'lodash/isPlainObject';
import keys from 'lodash/keys';
import forOwn from 'lodash/forOwn';
import MemoryAdapter from './adapters/Memory';
import MemoryCache from './caches/Memory';
import EventEmitter from 'events';
import Mode from './constants/Mode';

function defaultValue(path, attrs) {
  return `Missing default translation for: ${path}`;
}

const defaultOptions = {
  locale: null, // current locale
  locales: null, // available locales
  namespace: null, // current namespace
  fallbacks: {},
  cache: new MemoryCache({}),
  adapter: new MemoryAdapter({}),
  defaultAdapter: MemoryAdapter,
  dotNotation: true,
  mode: Mode.MAIN,
  references: true,
  variables: true,
  combinations: true,
  defaultValue,
  filters,
};

// TODO add || syntax

export default class Translate extends EventEmitter {
  constructor(options = {}, callback = () => {}) {
    super();

    this._options = {
      ...defaultOptions,
      ...options,
      filters: {
        ...filters, // available filters
        ...options.filters, // add user filters
      },
    };

    const { locale, adapter, defaultAdapter: DefaultAdapter } = this._options
    if (isPlainObject(adapter)) {
      const newAdapter = this._options.adapter = new DefaultAdapter();
      newAdapter.rehydrate(adapter);
    }

    this._translation = new Translation(this);

    if (locale) {
      this.load((err) => callback(err, this));
    } else if (callback) {
      callback(null, this);
    }
  }

  _clear() {
    // clear cache
    this.getOptions().cache.clear();

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

  load(namespace, callback = () => {}) {
    if (typeof namespace === 'function') {
      return this.load(null, namespace);
    }

    const options = this.getOptions();
    this._loadLocale(options.locale, namespace || options.namespace, callback);
  }

  setLocale(locale, callback = () => {}) {
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

  get(path, attrs, defaultValue) {
    if (isPlainObject(path)) {
      const translated = {};
      forOwn(path, (value, key) => {
        translated[key] = this.get(value, attrs, defaultValue, value);
      });

      return translated;
    }

    return this._translation.get(path, attrs, defaultValue, path);
  }

  set(name, value) {
    return this._translation.set(name, value, this);
  }

  getOptions() {
    return this._options;
  }

  getLocale() {
    return this.getOptions().locale;
  }

  getCache() {
    return this.getOptions().cache;
  }

  getAdapter() {
    return this.getOptions().adapter;
  }

  setFilter(type, fn) {
    if (isPlainObject(type)) {
      forOwn(type, (filter, filterType) => {
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
