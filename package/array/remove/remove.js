import { indexOf } from '../indexOf';
export function remove(array, query) {
    const idx = indexOf(array, query);
    if (idx >= 0) {
        return array.splice(idx, 1);
    }
    return idx;
}
//# sourceMappingURL=remove.js.map