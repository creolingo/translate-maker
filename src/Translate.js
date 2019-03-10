import isPlainObject from 'lodash/isPlainObject';
import parseLocale from 'locale-id';
import EventEmitter from 'events';
import Tree from './Tree';
import baseFilters from './filters';
import MemoryAdapter from './adapters/Memory';
import MemoryCache from './caches/Memory';
import Mode from './constants/Mode';

function baseDefaultValue(path) {
  return `Missing default translation for: ${path}`;
}

// TODO add || syntax
export default class Translate extends EventEmitter {
  constructor(options = {}) {
    super();

    if (isPlainObject(options.adapter)) {
      throw new Error('You need to use instance of adapter or data option');
    }

    const {
      locale,
      namespace,
      data,
      ...rest
    } = options;

    if (locale || namespace) {
      throw new Error('Use method setLocale instead of option locale and namespace');
    }

    this.options = {
      locales: undefined, // available locales
      cache: new MemoryCache({}),
      adapter: new MemoryAdapter({}),
      dotNotation: true,
      mode: Mode.MAIN,
      references: true,
      variables: true,
      combinations: true,
      defaultValue: baseDefaultValue,
      ...rest,
      filters: {
        ...baseFilters, // available filters
        ...rest.filters, // add user filters
      },
    };

    this.tree = new Tree(this);

    const { adapter } = this.getOptions();
    if (data) {
      adapter.rehydrate(data);
    }
  }

  clear() {
    const { cache } = this.getOptions();
    if (cache) {
      cache.clear();
    }

    this.tree = new Tree(this);
  }

  async waitForLocale() {
    if (!this.setLocalePromise) {
      return undefined;
    }

    return this.setLocalePromise;
  }

  async setLocale(locale, namespace) {
    const currentPromise = this.setLocalePromise;
    this.setLocalePromise = new Promise(async (resolve, reject) => {
      try {
        await currentPromise;
      } catch (e) {
        reject(e);
        return;
      }

      if (!locale) {
        throw new Error('Locale is undefined');
      }

      const options = this.getOptions();
      if (options.locales && options.locales.indexOf(locale) === -1) {
        throw new Error('Locale is not allowed. Setup locales');
      }

      const adapter = this.getAdapter();
      adapter.get(locale, namespace).then((data) => {
        const sameLocale = options.locale === locale;
        if (!sameLocale) {
          this.clear();

          this.options = {
            ...options,
            locale,
          };
        }

        if (namespace) {
          this.set(namespace, data);
        } else {
          this.set(data);
        }

        if (!sameLocale) {
          this.emit('locale', locale, namespace);
        }

        resolve(data);
      }, reject);
    });

    return this.setLocalePromise;
  }

  async loadNamespace(namespace) {
    // we need to wait for async setLocale
    await this.setLocalePromise;

    const options = this.getOptions();
    return this.setLocale(options.locale, namespace);
  }

  get(path, attrs, defaultValue) {
    if (path === undefined || path === null) {
      return undefined;
    }

    if (isPlainObject(path)) {
      const translated = {};
      Object.keys(path).forEach((key) => {
        translated[key] = this.get(path[key], attrs, defaultValue);
      });

      return translated;
    }

    return this.tree.get(path, attrs, defaultValue);
  }

  set(path, value) {
    const result = this.tree.set(path, value);

    this.emit('changed');

    return result;
  }

  getOptions() {
    return this.options;
  }

  getLocale() {
    return this.getOptions().locale;
  }

  getLanguage() {
    const locale = this.getLocale();
    if (locale) {
      const l = parseLocale(locale);
      return l && l.language;
    }

    return locale;
  }

  getCache() {
    return this.getOptions().cache;
  }

  getAdapter() {
    return this.getOptions().adapter;
  }

  setFilter(type, fn) {
    if (isPlainObject(type)) {
      Object.keys(type).forEach(filterType => this.setFilter(filterType, type[filterType]));
      return;
    }

    this.getOptions().filters[type] = fn;
  }

  getFilter(type) {
    const { filters } = this.getOptions();

    return filters && filters[type];
  }
}
