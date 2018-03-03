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

    /**
    * @deprecated use @firestitch/common/util/guid instead
    */
    public guid(pattern?: string): string {
      pattern = pattern || 'xxxxxx';
      return pattern.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    /**
     * @deprecated use import { uuid } from @firestitch/common/util; instead
    */
    public uuid(): string {
      return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    }

    /**
     * @deprecated use import { resolve } from @firestitch/common/util; instead
    */
    public resolve(promise: Promise<object>, defaults = []): Promise<object> {
      const result = defaults;
      return new Promise(resolve => {
            promise.then(function (data) {
                Object.keys(data).forEach(key => result[key] = data[key])
                resolve(result)
            });
       })
    }

    /**
     * @deprecated use _.toInteger() instead
    */
    public int(value: any): number {
        console.warn('@deprecated use _.toInteger() instead');
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    }

    /**
     * @deprecated use _.toFinite() instead
    */
    public float(value): number {
      console.warn('@deprecated use _.toFinite() instead');
      value = parseFloat(value);
      if (isNaN(value)) {
          value = 0;
      }
      return value;
    }

    /**
     * @deprecated use _.toString() instead
    */
    public string(string): string {
      console.warn('@deprecated use _.toString() instead'); 
        if (string === null || string === undefined) {
            string = '';
        }

        return (string).toString();
    }

    /**
     * @deprecated use import { isEmpty } from @firestitch/common/util; instead
    */
    public isEmpty(value, options?): boolean {
        console.warn('@deprecated use import { isEmpty } from @firestitch/common/util; instead'); 
        options = options || {};
        return value === undefined ||
            value === null ||
            value === false ||
            value === '' ||
            !this.string(value).length ||
            (
                this.isObject(value) &&
                (value.constructor.name === 'Object' && !Object.keys(value).length)) ||
                (!options.zero && (value === 0 || value === '0')
            );
    }

    /**
     * @deprecated use _.isInteger() instead
    */
    public isInt(value, type?) {
        console.warn('@deprecated use _.isInteger() instead'); 
        const int = !!this.string(value).match(/^\d+$/);

        if (!int) {
            return false;
        }

        if (type) {
            return Number.isInteger(value);
        }

        return true;
    }

    /**
     * @deprecated use _.each() instead {@link https://lodash.com/docs/4.17.5#forEach}
    */
    public each(object, func) {
      console.warn('@deprecated use _.each() instead {@link https://lodash.com/docs/4.17.5#forEach}'); 
      if (!this.isArray(object) && !this.isObject(object)) {
        return;
      }

      Object.keys(object).forEach(function(key) {
        func(object[key],key);
      });
    }

    /**
     * @deprecated use _.isArrayLikeObject() {@link https://lodash.com/docs/4.17.5#isArrayLikeObject}
     * or _.isObject() {@link https://lodash.com/docs/4.17.5#isObject} instead
    */
    public isObject(value): boolean {
      console.warn('@deprecated use _.isArrayLikeObject() {@link https://lodash.com/docs/4.17.5#isArrayLikeObject} or _.isObject() {@link https://lodash.com/docs/4.17.5#isObject} instead'); 
      return value !== null && typeof value === 'object' && !this.isArray(value);
    }

    /**
      * @deprecated use _.isString() instead {@link https://lodash.com/docs/4.17.5#isString}
    */
    public isString(value): boolean {
      console.warn('@deprecated use _.isString() instead {@link https://lodash.com/docs/4.17.5#isString}'); 
      return typeof value === 'string' || value instanceof String;
    }

    /**
     * @deprecated use _.isArray() instead {@link https://lodash.com/docs/4.17.5#isArray}
    */
    public isArray(value): boolean {
      console.warn('@deprecated use _.isArray() instead {@link https://lodash.com/docs/4.17.5#isArray}'); 
      return value instanceof Array;
    }

    /**
     * @deprecated use import { isNumeric } from @firestitch/common/util; instead
    */
    public isNumeric(value): boolean {
      console.warn('@deprecated use import { isNumeric } from @firestitch/common/util; instead'); 
      return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    }

    /**
     * @deprecated use import { isClass } from @firestitch/common/util; instead
    */
    public isClass(value, cls) {
        console.warn('@deprecated use import { isClass } from @firestitch/common/util; instead'); 
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

    /**
      * @deprecated use _.isBoolean() instead {@link https://lodash.com/docs/4.17.5#isBoolean}
    */
    public isBoolean(value): boolean {
      console.warn('@deprecated use _.isBoolean() instead {@link https://lodash.com/docs/4.17.5#isBoolean}'); 
      return value === true || value === false;
    }

    /**
     * @deprecated use import { value } from @firestitch/common/util; instead
    */
    public value(object, key, def): any {
      console.warn('@deprecated use import { value } from @firestitch/common/util; instead'); 
        if (this.isObject(object) || this.isArray(object)) {

            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }

        return def;
    }

    public throttle(func, wait) {
      console.warn('@deprecated use import { throttle } from @firestitch/common/util; instead'); 
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

    /**
     * @deprecated use import { debounce } from @firestitch/common/util; instead
    */
    public debounce(func, wait, immediate) {
      console.warn('@deprecated use import { debounce } from @firestitch/common/util; instead'); 
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

    /**
     * @deprecated use import { length } from @firestitch/common/util; instead
    */
    public length(object): number {
      console.warn('@deprecated use import { length } from @firestitch/common/util; instead'); 
      if (this.isObject(object)) {
            return Object.keys(object).length;
        }

        if (this.isArray(object)) {
            return object.length;
        }

        return 0;
    }

    /**
     * @deprecated use import { boolean } from @firestitch/common/util; instead
    */
    public boolean(value) {
      console.warn('@deprecated use import { boolean } from @firestitch/common/util; instead'); 
      return this.string(value).toLowerCase() !== 'false' && !!value;
    }

    /**
     * @deprecated use import { stringify } from @firestitch/common/util; instead
    */
    public stringify(value) {
      console.warn('@deprecated use import { stringify } from @firestitch/common/util; instead'); 
      return JSON.stringify(value);
    }
}
