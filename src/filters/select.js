import find from 'lodash/collection/find';

export default function(value, part, attrs, metadata, options = {}) {
  if (options.type === 'pairs') {
    const pairs = options.values || [];
    const option = find(pairs, (pair) => pair.key === value);
    if (option) {
      return this.buildText(option.value, attrs);
    }

    const defaultOption = find(pairs, (pair) => pair.key === null);
    if (defaultOption) {
      return this.buildText(defaultOption.value, attrs);
    }
  }
}
