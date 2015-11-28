import Translation from './Translation';
import capitalize from './filters/capitalize';
import as from './filters/as';
import select from './filters/select';
import plural from './filters/plural';

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
