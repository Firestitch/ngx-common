import { Injectable } from '@angular/core';

export const KEY_CANCEL = 3,
    KEY_HELP = 6,
    KEY_BACKSPACE = 8,
    KEY_TAB = 9,
    KEY_CLEAR = 12,
    KEY_RETURN = 13,
    KEY_ENTER = 14,
    KEY_SHIFT = 16,
    KEY_CONTROL = 17,
    KEY_ALT = 18,
    KEY_PAUSE = 19,
    KEY_CAPS_LOCK = 20,
    KEY_ESCAPE = 27,
    KEY_SPACE = 32,
    KEY_PAGE_UP = 33,
    KEY_PAGE_DOWN = 34,
    KEY_END = 35,
    KEY_HOME = 36,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    KEY_PRINTSCREEN = 44,
    KEY_INSERT = 45,
    KEY_DELETE = 46,
    KEY_0 = 48,
    KEY_1 = 49,
    KEY_2 = 50,
    KEY_3 = 51,
    KEY_4 = 52,
    KEY_5 = 53,
    KEY_6 = 54,
    KEY_7 = 55,
    KEY_8 = 56,
    KEY_9 = 57,
    KEY_SEMICOLON = 59,
    KEY_EQUALS = 61;

/*
    Basically, just copy-pasted functionality from fs-boilerplate v1.x, with some small changes (like we dont have angular.bind anymore, had to go with a workaround)
    There might be a better way to organise constatns but I need to know use-cases
*/


@Injectable()
export class FsUtil {

    private intervals = {};
    public guid(pattern?: string): string {
      pattern = pattern || 'xxxxxx';
      return pattern.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    public uuid(): string {
      return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    }

    public resolve(promise: Promise<object>, defaults = []): Promise<object> {
      const result = defaults;
      return new Promise(resolve => {
            promise.then(function (data) {
                Object.keys(data).forEach(key => result[key] = data[key])
                resolve(result)
            });
       })
    }

    public int(value: any): number {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    }

    public float(value): number {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    }

    public string(string): string {

        if (string === null || string === undefined) {
            string = '';
        }

        return string.toString();
    }


    public isEmpty(value, options?): boolean {
        options = options || {};
        return value === undefined ||
            value === null ||
            value === '' ||
            (this.isObject(value) && (value.constructor.name == 'Object' && !Object.keys(value).length)) ||
            !value.length ||
            (!options.zero && (value === 0 || value === '0'));
    }

    public isInt(value, type?) {
        const int = !!this.string(value).match(/^\d+$/);

        if (!int) {
            return false;
        }

        if (type) {
            return Number.isInteger(value);
        }

        return true;
    }

    public each(object, func) {
      if (!this.isArray(object) && !this.isObject(object)) {
        return;
      }

      Object.keys(object).forEach(function(key) {
        func(object[key],key);
      });
    }

    public isObject(value): boolean {
        return value !== null && typeof value === 'object' && !this.isArray(value);
    }

    public isString(value): boolean {
        return typeof value === 'string' || value instanceof String;
    }

    public isArray(value): boolean {
        return value instanceof Array;
    }

    public isNumeric(value): boolean {
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    }

    public isClass(value, cls) {

        if (this.isObject(value)) {

            if (this.isString(cls)) {

                if (value.constructor) {
                    if (value.constructor.name === cls) {
                        return true;
                    }
                }

            } else {

                if (value instanceof cls) {
                    return true;
                }
            }
        }

        return false;
    }

    public isBoolean(value): boolean {
        return value === true || value === false;
    }

    public value(object, key, def): any {

        if (this.isObject(object) || this.isArray(object)) {

            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }

        return def;
    }

    public interval(fn, delay, name) {
        const instance = setInterval(fn, delay);

        if (name) {
            this.intervals[name] = instance;
        }

        return function () {
            window.clearInterval(instance);
        }
    }

    public clearInterval(name) {

      const instance = this.intervals[name];

        if (instance) {
            window.clearInterval(instance);
        }
    }

    public throttle(func, wait) {
      let waiting = false;                  	// Initially, we're not waiting
        return function () {               		// We return a throttled function
            if (!waiting) {                   	// If we're not waiting
                func.apply(null, arguments);     // Execute users function
                waiting = true;               	// Prevent future invocations
                setTimeout(function () {   		// After a period of time
                    waiting = false;          	// And allow future invocations
                }, wait);
            }
        }
    }

    public debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    public length(object): number {
        if (this.isObject(object)) {
            return Object.keys(object).length;
        }

        if (this.isArray(object)) {
            return object.length;
        }

        return 0;
    }

    public boolean(value) {
        return this.string(value).toLowerCase() !== 'false' && !!value;
    }

    public stringify(value) {
      return JSON.stringify(value);
    }
}