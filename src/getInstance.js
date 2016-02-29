import Translate from './Translate';

let instance = null;

export default function getInstance(options) {
  if (instance) {
    return instance;
  }

  if (!options) {
    throw new Error('You need to initialize singleton instance first. Call getInstance with options.');
  }

  instance = new Translate(options);
  return instance;
}
