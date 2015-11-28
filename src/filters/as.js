import set from 'lodash/object/set';

export default function(value, part, attrs, metadata, ...args) {
  const params = {};

  args.forEach((param) => {
    const { from, to } = param;
    const paramValue = this.resolveValue(from, attrs);

    set(params, to, paramValue);
  });

  return this.resolveValue(part, params);
}
