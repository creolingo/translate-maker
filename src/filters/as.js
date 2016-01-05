import set from 'lodash/object/set';
import forEach from 'lodash/collection/forEach';

export default function(value, part, attrs, metadata, ...args) {
  const params = {};

  forEach(args, (param) => {
    const { from, to } = param;
    const paramValue = this._resolveValue(from, attrs);

    set(params, to, paramValue);
  });

  return this._resolveValue(part, params);
}
