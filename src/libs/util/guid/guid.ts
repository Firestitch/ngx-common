export function guid(pattern?: string, options: any = { case: 'lower', numbers: true }): string {
  pattern = pattern || 'xxxxxx';
  let s = '';

  if (options.numbers !== false) {
    s = '0123456789';
  }

  if (!options.case || options.case === 'lower' || options.case === 'mixed') {
    s = s.concat('abcdefghijklmnopqrstuvwxyz');
  }

  if (options.case === 'upper' || options.case === 'mixed') {
    s = s.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }

  const chars = s.match(/(.{1,1})/g);

  return pattern.replace(/[x]/g, function (c) {
    const i = (Math.random() * chars.length) | 0;

    return chars[i];
  });
}
