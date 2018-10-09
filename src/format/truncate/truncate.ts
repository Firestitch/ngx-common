export function truncate(value: string, limit = 100, completeWords = false, ellipsis = '...') {

  let result = value;

  if (completeWords) {
    limit = value.substr(0, limit).lastIndexOf(' ');
  }

  result = `${value.substr(0, limit)}`;

  if (result !== value) {
    result += ellipsis;
  }

  return result;

}
