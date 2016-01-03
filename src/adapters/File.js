import Adapter from './Adapter';

function getPath(options, namespace, fileName) {
  if (!namespace) {
    return `${options.path}/${fileName}`;
  }

  const mainPath = options.namespacePath || options.path;
  const directory = namespace.replace('.', '/'); // replace com.data => com/data

  return `${mainPath}/${directory}/${fileName}`;
}

const defaultOptions = {
  path: void 0,
  getFile: void 0,
  getPath,
  ext: '.js',
};

export default class File extends Adapter {
  constructor(options = {}) {
    if (!options.path && !options.getFile) {
      throw new Error('You need to set path or getFile');
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
    if (options.getFile) {
      return callback(null, options.getFile(locale, namespace));
    }

    const fileName = `${locale}${options.ext || ''}`;
    const filePath = options.getPath(options, namespace, fileName);

    const data = require(filePath);
    callback(null, data);
  }

  set(locale, value, namespace, callback) {
    throw new Error('File adapter is read only');
  }
}
