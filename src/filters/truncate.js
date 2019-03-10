import truncate from 'lodash/truncate';

export default (
  value,
  part,
  attrs,
  metadata,
  length = 30,
  omission = '...',
) => truncate(value, {
  length,
  omission,
});
