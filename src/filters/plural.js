import find from 'lodash/collection/find';
import cldr from 'cldr';

function plural(locale, count) {
  const fn = cldr.extractPluralRuleFunction(locale);

  return fn(count);
}

function getValue(data, key, defaultValue) {
  const items = data || [];
  const option = find(items, (item) => item.key === key);

  return option ? option.value : defaultValue;
}

export default function(value, part, attrs, metadata, options = {}) {
  const root = this._root;
  const locale = root.getOptions().locale;
  const numberValue = Number(value);
  const pluralValue = plural(locale, numberValue);
  const offset = getValue(metadata, 'offset', 0);
  const smartValue = numberValue - offset;

  if (options.type === 'pairs') {
    const pairs = options.values || [];

    let defaultOption = null;
    const option = find(pairs, (pair) => {
      if (!pair.key) {
        defaultOption = pair;
        return false;
      }

      const key = typeof pair.key === 'string' ? pair.key.toLowerCase() : pair.key;
      if (key[0] === '=') {
        const keyValue = parseInt(key.substr(1), 10);
        return keyValue === numberValue;
      }

      return key === pluralValue;
    });

    if (option) {
      return this.buildText(option.value, attrs, smartValue);
    } else if (defaultOption) {
      return this.buildText(defaultOption.value, attrs, smartValue);
    }
  }
}
