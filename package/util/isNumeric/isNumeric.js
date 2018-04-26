import { toString } from 'lodash';
export function isNumeric(value) {
    var str = toString(value);
    return str.length && !!str.match(/^-?\d*\.?\d*$/);
}
//# sourceMappingURL=isNumeric.js.map