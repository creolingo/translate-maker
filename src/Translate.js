import cldr from 'cldr';
import Translation from './Translation';

const defaultOptions = {
  locale: 'en',
};

export default class Translate {
  constructor(options = {}) {
    //super();

    this._options = {
      ...defaultOptions,
      options,
    };

    this._translation = new Translation();
  }

  plural(count) {
    const options = this._options;
    const fn = cldr.extractPluralRuleFunction(options.locale);

    const value = fn(count);

    return value ? value.toUpperCase() : void 0;
  }

  get(path, attrs) {
    return this._translation.get(path, attrs);
  }

  set(name, value) {
    return this._translation.set(name, value, this);
  }
}
