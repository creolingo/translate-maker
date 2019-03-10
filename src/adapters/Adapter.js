export default class Adapter {
  constructor(options = {}) {
    this.options = options;
  }

  getOptions() {
    return this.options;
  }

  async get(locale, namespace) { // eslint-disable-line
    throw new Error('Implement method get');
  }

  async set(locale, value, namespace) { // eslint-disable-line
    throw new Error('Implement method set');
  }

  dehydrate() { // eslint-disable-line
    throw new Error('Implement method dehydrate');
  }

  rehydrate(state) { // eslint-disable-line
    throw new Error('Implement method rehydrate');
  }
}
