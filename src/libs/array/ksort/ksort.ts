export function ksort(unordered) {
  Object.keys(unordered).sort().forEach(function (key) {
    const value = unordered[key];
    delete unordered[key];
    unordered[key] = value;
  });
}
