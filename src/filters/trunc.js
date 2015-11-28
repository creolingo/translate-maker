import trunc from 'lodash/string/trunc';

export default function(value, part, attrs, metadata, length = 30, omission = '...') {
  return trunc(value, {
    length,
    omission,
  });
}
