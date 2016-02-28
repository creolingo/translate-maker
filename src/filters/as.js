import set from 'lodash/set';
import forEach from 'lodash/forEach';

export default function(value, part, attrs, metadata, ...args) {
  const params = {};

  forEach(args, (param) => {
    const { from, to } = param;
    const paramValue = this._resolveValue(from, attrs);

    set(params, to, paramValue);
  });

  return this._resolveValue(part, params);
}
