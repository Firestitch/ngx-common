import { isObject } from 'util';
export function value(object, key, def) {
    if (isObject(object) || Array.isArray(object)) {
        if (object.hasOwnProperty(key)) {
            return object[key];
        }
    }
    return def;
}
//# sourceMappingURL=value.js.map