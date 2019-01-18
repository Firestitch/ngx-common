export function acronym(str: string, length = 2): string {
  const splittedString = str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ');

  let result = '';

  for (let i = 0; i < length; i++) {
    if (!splittedString[i]) {
      if (splittedString.length === 1) {

        for (let j = 1; j < length; j++) {
          if (!splittedString[i-1][j]) {
            break;
          }
          result += splittedString[i-1][j].toUpperCase();
        }
      }
      break;
    }
    result += splittedString[i][0].toUpperCase();
  }

  return result;
}
