export default class Cache {
  constructor(options = {}) {
    this.options = options;
  }

  getOptions() {
    return { ...this.options };
  }

  get(key) { // eslint-disable-line
    throw new Error('Implement method get');
  }

  has(key) { // eslint-disable-line
    throw new Error('Implement method has');
  }

  set(key, value) { // eslint-disable-line
    throw new Error('Implement method set');
  }

  clear() { // eslint-disable-line
    throw new Error('Implement method clear');
  }

  dehydrate() { // eslint-disable-line
    throw new Error('Implement method dehydrate');
  }

  rehydrate(state) { // eslint-disable-line
    throw new Error('Implement method rehydrate');
  }
}
