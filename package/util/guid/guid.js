export function guid(pattern) {
    pattern = pattern || 'xxxxxx';
    return pattern.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
//# sourceMappingURL=guid.js.map