import Cache from './Cache';

export default class Memory extends Cache {
  constructor(options = {}) {
    super(options);

    this.data = {};
  }

  get(key) {
    return this.data[key];
  }

  has(key) {
    return !!this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    return true;
  }

  clear() {
    this.data = {};
    return true;
  }

  dehydrate() {
    return this.data;
  }

  rehydrate(state) {
    this.data = state;
  }
}
