import find from 'lodash/find';

export default function(value, part, attrs, metadata, ...args) {
  let defaultOption = null;
  const option = find(args, (arg) => {
    if (arg.type !== 'pair') {
      return false;
    }

    if (!arg.key || arg.key === 'other') {
      defaultOption = arg;
      return false;
    }

    return arg.key === value;
  });

  if (option) {
    return this._buildText(option.value, attrs, value);
  }

  if (defaultOption) {
    return this._buildText(defaultOption.value, attrs, value);
  }
}
