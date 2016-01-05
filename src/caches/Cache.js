export default class Cache {
  constructor(options = {}) {
    this._options = options;
  }

  getOptions() {
    return { ...this._options };
  }

  get(key) {
    throw new Error('Implement method get');
  }

  has(key) {
    throw new Error('Implement method has');
  }

  set(key, value) {
    throw new Error('Implement method set');
  }

  clear() {
    throw new Error('Implement method clear');
  }

  dehydrate() {
    throw new Error('Implement method dehydrate');
  }

  rehydrate(state) {
    throw new Error('Implement method rehydrate');
  }
}
