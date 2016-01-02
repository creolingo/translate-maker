import Adapter from '../Adapter';

function getPath(options, namespace, fileName) {
  if (!namespace) {
    return `${options.path}/${fileName}`;
  }

  const mainPath = options.namespacePath || options.path;
  const directory = namespace.replace('.', '/'); // replace com.data => com/data

  return `${mainPath}/${directory}/${fileName}`;
}

const defaultOptions = {
  getPath,
  ext: '.js',
};

export default class File extends Adapter {
  constructor(options = {}) {
    if (!options.path) {
      throw new Error('Path is not defined');
    }

    super({
      ...defaultOptions,
      ...options,
    });
  }

  get(locale, namespace, callback) {
    if (typeof namespace === 'function') {
      return this.get(locale, null, namespace);
    }

    const options = this.getOptions();
    const fileName = `${locale}${options.ext}`;
    const filePath = options.getPath(options, namespace, fileName);

    const data = require(filePath);
    callback(null, data);
  }

  set(locale, namespace, callback) {
    throw new Error('File adapter is read only');
  }
}
