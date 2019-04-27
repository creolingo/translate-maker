// b@flow

export default function join(items): string {
  if (Array.isArray(items)) {
    return items
      .map(item => join(item))
      .join('');
  }

  return items;
}
