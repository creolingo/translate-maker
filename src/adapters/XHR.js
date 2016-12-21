import Adapter from './Adapter';
import { defaultResolvePath } from './File';

async function defaultGetData(url, parse) {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
      xhr.onreadystatechange = () => {
        if (xhr.readyState > 3) {
          resolve(parse(xhr.responseText));
        }
      };

      xhr.open('GET', url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send();
    } catch (e) {
      reject(e);
    }
  });
}

export default class XHR extends Adapter {
  constructor(options = {}) {
    if (!options.path) {
      throw new Error('You need to set path');
    }

    super({
      path: undefined,
      resolvePath: defaultResolvePath,
      parse: JSON.parse,
      ext: '.json',
      getData: defaultGetData,
      setData: undefined,
      ...options,
    });
  }

  async get(locale, namespace) {
    if (typeof namespace === 'function') {
      return await this.get(locale, null, namespace);
    }

    const options = this.getOptions();
    const { resolvePath, getData, parse } = options;
    const path = resolvePath(locale, namespace, options);

    return await getData(path, parse);
  }

  async set(locale, value, namespace) {
    if (typeof namespace === 'function') {
      return await this.set(locale, value, null, namespace);
    }

    throw new Error('XHR adapter is read only');
  }
}
