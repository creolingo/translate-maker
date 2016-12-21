export default (value) => {
  return typeof value === 'string'
    ? value.toLowerCase()
    : value;
};
