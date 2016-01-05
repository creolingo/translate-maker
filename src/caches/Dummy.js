import Cache from './Cache';

export default class Dummy extends Cache {
  get(key) {
    return void 0;
  }

  has(key) {
    return false;
  }

  set(key, value) {
    return true;
  }

  clear() {
    return true;
  }

  dehydrate() {
    return void 0;
  }

  rehydrate(state) {
    return void 0;
  }
}
