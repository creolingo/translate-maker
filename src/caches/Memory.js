import Cache from './Cache';

export default class Memory extends Cache {
  constructor(options = {}) {
    super(options);

    this._data = {};
  }

  get(key) {
    return this._data[key];
  }

  has(key) {
    return !!this._data[key];
  }

  set(key, value) {
    this._data[key] = value;
    return true;
  }

  clear() {
    this._data = {};
    return true;
  }
}
