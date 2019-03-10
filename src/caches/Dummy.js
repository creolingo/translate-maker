import Cache from './Cache';

export default class Dummy extends Cache {
  get(key) { // eslint-disable-line
    return undefined;
  }

  has(key) { // eslint-disable-line
    return false;
  }

  set(key, value) { // eslint-disable-line
    return true;
  }

  clear() { // eslint-disable-line
    return true;
  }

  dehydrate() { // eslint-disable-line
    return undefined;
  }

  rehydrate(state) { // eslint-disable-line
    return undefined;
  }
}
