export default class Adapter {
  constructor(options = {}) {
    this._options = options;
  }

  getOptions() {
    return this._options;
  }

  get(locale, namespace, callback) {
    throw new Error('Implement method get');
  }

  set(locale, value, namespace, callback) {
    throw new Error('Implement method set');
  }
}
