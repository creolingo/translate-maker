import Adapter from './Adapter';

function request(url, parse, callback) {
  try {
    const xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    xhr.onreadystatechange = () => {
      if (xhr.readyState > 3) {
        callback(null, parse(xhr.responseText));
      }
    };

    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
  } catch (e) {
    callback(e);
  }
}

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
  getPath,
  parse: JSON.parse,
  request,
  ext: '.json',
};

export default class XHR extends Adapter {
  constructor(options = {}) {
    if (!options.path) {
      throw new Error('You need to set path');
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
    const fileName = `${locale}${options.ext || ''}`;
    const path = options.getPath(options, namespace, fileName);

    options.request(path, options.parse, callback);
  }

  set(locale, value, namespace, callback) {
    throw new Error('XHR adapter is read only');
  }
}
