import Cache from './Cache';

export default class Dummy extends Cache {
  get(key) {
    return undefined;
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
    return undefined;
  }

  rehydrate(state) {
    return undefined;
  }
}
