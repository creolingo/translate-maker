import set from 'lodash/set';
import forEach from 'lodash/forEach';

export default function(value, part, attrs, metadata, ...args) {
  const params = {};

  forEach(args, (param) => {
    const { from, to } = param;
    const paramValue = this.resolveValue(from, attrs);

    set(params, to, paramValue);
  });

  return this.resolveValue(part, params);
}
