export function isArrayEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  const sortFn = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  arr1 = [...arr1].sort(sortFn);
  arr2 = [...arr2].sort(sortFn);

  return arr1.every((value, index) => {
    return value === arr2[index];
  });
}
