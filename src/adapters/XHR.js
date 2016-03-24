import Adapter from './Adapter';
import { defaultResolvePath } from './File';

function defaultGetData(url, parse, callback) {
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

const defaultOptions = {
  path: void 0,
  resolvePath: defaultResolvePath,
  parse: JSON.parse,
  ext: '.json',
  getData: defaultGetData,
  setData: void 0,
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
    const { resolvePath, getData, parse } = options;
    const path = resolvePath(locale, namespace, options);

    return getData(path, parse, callback);
  }

  set(locale, value, namespace, callback) {
    if (typeof namespace === 'function') {
      return this.set(locale, value, null, namespace);
    }

    throw new Error('XHR adapter is read only');
  }
}
