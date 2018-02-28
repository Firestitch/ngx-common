export function boolean(value) {
    return this.string(value).toLowerCase() !== 'false' && !!value;
}
//# sourceMappingURL=boolean.js.map