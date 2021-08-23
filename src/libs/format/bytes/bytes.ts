export function bytes(bytes: number) {
  if (!bytes) { return '0.00 B'; }
  const e = Math.floor(Math.log(bytes) / Math.log(1024));

  const decimals = (bytes / 1024) > 1000 ? 2 : 0;
  console.log(bytes, (bytes / 1024), decimals);
  return `${(bytes / Math.pow(1024, e)).toFixed(decimals)}`.replace(/\.00/, '')
    + ' '
    + (e ? ' KMGTP'.charAt(e) : '') + 'B';
}
