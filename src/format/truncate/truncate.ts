export function truncate(value: string, limit = 100, completeWords = false, ellipsis = '...') {

  value = value || '';

  if (completeWords) {
    limit = value.substr(0, limit).lastIndexOf(' ');
  }

  let result = `${value.substr(0, limit)}`;

  if (result !== value) {
    result += ellipsis;
  }

  return result;

}
