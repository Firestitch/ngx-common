import { toString } from 'lodash';
export function boolean(value) {
    return toString(value).toLowerCase() !== 'false' && !!value;
}
//# sourceMappingURL=boolean.js.map