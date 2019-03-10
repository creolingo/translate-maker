import Adapter from './Adapter';

export function defaultResolvePath(locale, namespace, options) {
  const { ext, path } = options;

  const fileName = ext ? `${locale}${ext}` : locale;

  const namespacePath = namespace
    ? `/${namespace.replace('.', '/')}`
    : '';

  const namespaceFilePath = namespacePath
    ? `${namespacePath}/${fileName}`
    : fileName;

  return path
    ? `${path}/${namespaceFilePath}`
    : namespaceFilePath;
}

export default class File extends Adapter {
  constructor(options = {}) {
    if (!options.getData) {
      throw new Error('You need to set getData');
    }

    super({
      path: undefined,
      ext: undefined,
      getData: undefined,
      setData: undefined,
      resolvePath: defaultResolvePath,
      ...options,
    });
  }

  async get(locale, namespace) {
    const options = this.getOptions();
    const { resolvePath, getData } = options;
    const path = resolvePath(locale, namespace, options);

    return getData(path);
  }

  async set(locale, value, namespace) {
    if (typeof namespace === 'function') {
      return this.set(locale, value, null, namespace);
    }

    const options = this.getOptions();
    const { resolvePath, setData } = options;
    if (!setData) {
      throw new Error('You need to set option setData');
    }

    const path = resolvePath(locale, namespace, options);

    return setData(path, value);
  }
}
