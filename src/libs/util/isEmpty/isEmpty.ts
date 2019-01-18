import { isObject, toString } from 'lodash-es';

export function isEmpty(value, options?) {
  options = options || {};
  return value === undefined ||
    value === null ||
    value === false ||
    value === '' ||
    !toString(value).length ||
    (
      isObject(value) &&
      (value.constructor.name === 'Object' && !Object.keys(value).length)) ||
    (!options.zero && (value === 0 || value === '0')
    );
}
