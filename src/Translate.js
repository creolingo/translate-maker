import Translation from './Translation';
import * as filters from './filters';
import isPlainObject from 'lodash/lang/isPlainObject';
import keys from 'lodash/object/keys';
import forOwn from 'lodash/object/forOwn';
import MemoryAdapter from './adapters/Memory';
import MemoryCache from './caches/Memory';
import EventEmitter from 'events';
import Mode from './constants/Mode';

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
  filters,
};

export default class Translate extends EventEmitter {
  constructor(options = {}, callback = () => {}) {
    super();

    this._options = {
      ...defaultOptions,
      ...options,
    };

    const { locale, adapter, defaultAdapter: DefaultAdapter } = this._options
    if (isPlainObject(adapter)) {
      this._options.adapter = new DefaultAdapter({
        data: adapter,
      });
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
