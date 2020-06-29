export function bytes(bytes: number) {
  if (!bytes) { return '0.00 B'; }
  const e = Math.floor(Math.log(bytes) / Math.log(1024));

  const decimals = (bytes / 1024) > 1000 ? 2 : 0;

  return (bytes / Math.pow(1024, e)).toFixed(decimals) + ' ' + (e ? ' KMGTP'.charAt(e) : '') + 'B';
}
