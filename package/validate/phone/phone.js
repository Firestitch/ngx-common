export function phone(value) {
    var valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
    return valid || !String(value).length;
}
//# sourceMappingURL=phone.js.map