export declare const KEY_CANCEL = 3, KEY_HELP = 6, KEY_BACKSPACE = 8, KEY_TAB = 9, KEY_CLEAR = 12, KEY_RETURN = 13, KEY_ENTER = 14, KEY_SHIFT = 16, KEY_CONTROL = 17, KEY_ALT = 18, KEY_PAUSE = 19, KEY_CAPS_LOCK = 20, KEY_ESCAPE = 27, KEY_SPACE = 32, KEY_PAGE_UP = 33, KEY_PAGE_DOWN = 34, KEY_END = 35, KEY_HOME = 36, KEY_LEFT = 37, KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40, KEY_PRINTSCREEN = 44, KEY_INSERT = 45, KEY_DELETE = 46, KEY_0 = 48, KEY_1 = 49, KEY_2 = 50, KEY_3 = 51, KEY_4 = 52, KEY_5 = 53, KEY_6 = 54, KEY_7 = 55, KEY_8 = 56, KEY_9 = 57, KEY_SEMICOLON = 59, KEY_EQUALS = 61;
export declare class FsUtil {
    private intervals;
    guid(pattern?: string): string;
    uuid(): string;
    resolve(promise: Promise<object>, defaults?: any[]): Promise<object>;
    int(value: any): number;
    float(value: any): number;
    string(string: any): string;
    isEmpty(value: any, options?: any): boolean;
    isInt(value: any, type?: any): boolean;
    each(object: any, func: any): void;
    isObject(value: any): boolean;
    isString(value: any): boolean;
    isArray(value: any): boolean;
    isNumeric(value: any): boolean;
    isClass(value: any, cls: any): boolean;
    isBoolean(value: any): boolean;
    value(object: any, key: any, def: any): any;
    interval(fn: any, delay: any, name: any): () => void;
    clearInterval(name: any): void;
    throttle(func: any, wait: any): () => void;
    debounce(func: any, wait: any, immediate: any): () => void;
    length(object: any): number;
    boolean(value: any): boolean;
    stringify(value: any): string;
}
export declare class FsObject {
}
