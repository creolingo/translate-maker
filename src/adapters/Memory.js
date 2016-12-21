import get from 'lodash/get';
import set from 'lodash/set';
import Adapter from './Adapter';

export default class Memory extends Adapter {
  constructor(options = {}) {
    const { data = {}, ...rest } = options;

    super({
      ...rest,
    });

    this.data = data;
  }

  static getPath(locale, namespace) {
    return namespace
      ? `${namespace}.${locale}`
      : locale;
  }

  async get(locale, namespace) {
    if (!locale) {
      throw new Error('Locale is undefined');
    }

    const path = Memory.getPath(locale, namespace);

    return get(this.data, path);
  }

  async set(locale, value, namespace) {
    if (!locale) {
      throw new Error('Locale is undefined');
    }

    const path = Memory.getPath(locale, namespace);

    return set(this.data, path, value);
  }

  dehydrate() {
    return { ...this.data };
  }

  rehydrate(state) {
    this.data = state;
  }
}
