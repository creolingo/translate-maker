import truncate from 'lodash/truncate';

export default function(value, part, attrs, metadata, length = 30, omission = '...') {
  return truncate(value, {
    length,
    omission,
  });
}
