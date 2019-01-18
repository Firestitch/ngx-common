export function guid(pattern?: string, options: any={}): string {
  pattern = pattern || 'xxxxxx';
  let s = '0123456789abcdefghijklmnopqrstuvwxyz';

  if (options.uppercase===true) {
    s = s.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }

  const chars = s.match(/(.{1,1})/g);
  return pattern.replace(/[x]/g, function(c) {
    const i = (Math.random() * chars.length) | 0;
    return chars[i];
  });
}
