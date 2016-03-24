import Adapter from './Adapter';

export function defaultResolvePath(locale, namespace, options) {
  const { ext, path } = options;

  const fileName = `${locale}${ext || ''}`;

  const namespacePath = namespace
    ? '/' + namespace.replace('.', '/')
    : '';

  const namespaceFilePath = namespacePath
    ? `${namespacePath}/${fileName}`
    : fileName;

  return namespaceFilePath
    ? `${path}/${namespaceFilePath}`
    : namespaceFilePath;
}

const defaultOptions = {
  path: void 0,
  ext: void 0,
  getData: void 0,
  setData: void 0,
  resolvePath: defaultResolvePath,
};

export default class File extends Adapter {
  constructor(options = {}) {
    if (!options.getData) {
      throw new Error('You need to set getData');
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
    const { resolvePath, getData } = options;
    const path = resolvePath(locale, namespace, options);

    return getData(path, callback);
  }

  set(locale, value, namespace, callback) {
    if (typeof namespace === 'function') {
      return this.set(locale, value, null, namespace);
    }

    const options = this.getOptions();
    const { resolvePath, setData } = options;
    if (!setData) {
      return callback(new Error('You need to set option setData'));
    }

    const path = resolvePath(locale, namespace, options);

    return setData(path, value, callback);
  }
}
