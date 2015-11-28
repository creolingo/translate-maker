import Translation from './Translation';
import capitalize from './filters/capitalize';
import as from './filters/as';
import select from './filters/select';
import plural from './filters/plural';
import camelCase from './filters/camelCase';
import trim from './filters/trim';
import trunc from './filters/trunc';
import escape from './filters/escape';
import upperCase from './filters/upperCase';
import lowerCase from './filters/lowerCase';

const defaultOptions = {
  locale: 'en',
};

export default class Translate {
  constructor(options = {}) {
    this._options = {
      ...defaultOptions,
      options,
    };

    this._filters = {
      capitalize,
      as,
      select,
      plural,
      camelCase,
      trim,
      trunc,
      escape,
      upperCase,
      lowerCase,
    };

    this._translation = new Translation(this);
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

  setFilter(type, fn) {
    this._filters[type] = fn;
  }

  getFilter(type) {
    return this._filters[type];
  }
}
