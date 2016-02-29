import Translate from './Translate';

let instance = null;

export default function getInstance(options) {
  if (instance) {
    return instance;
  }

  instance = new Translate(options);
  return instance;
}
