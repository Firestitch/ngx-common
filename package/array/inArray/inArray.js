export function inArray(values, array) {
    if (!Array.isArray(values)) {
        values = [values];
    }
    for (var i = 0, len = values.length; i < len; i++) {
        if (array.indexOf(values[i]) >= 0) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=inArray.js.map