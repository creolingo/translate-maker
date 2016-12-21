export default class Adapter {
  constructor(options = {}) {
    this.options = options;
  }

  getOptions() {
    return this.options;
  }

  async get(locale, namespace) {
    throw new Error('Implement method get');
  }

  async set(locale, value, namespace) {
    throw new Error('Implement method set');
  }

  dehydrate() {
    throw new Error('Implement method dehydrate');
  }

  rehydrate(state) {
    throw new Error('Implement method rehydrate');
  }
}
