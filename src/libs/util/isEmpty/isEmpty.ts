export function isEmpty(value, options?) {
  options = options || {};
  return value === undefined ||
    value === null ||
    value === false ||
    value === '' ||
    String(value).length === 0 ||
    (Array.isArray(value) && value.length === 0) || 
    (value instanceof Object && Object.keys(value).length === 0) || 
    (!options.zero && (value === 0 || value === '0')
    );
}
