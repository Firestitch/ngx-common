"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.KEY_CANCEL = 3, exports.KEY_HELP = 6, exports.KEY_BACKSPACE = 8, exports.KEY_TAB = 9, exports.KEY_CLEAR = 12, exports.KEY_RETURN = 13, exports.KEY_ENTER = 14, exports.KEY_SHIFT = 16, exports.KEY_CONTROL = 17, exports.KEY_ALT = 18, exports.KEY_PAUSE = 19, exports.KEY_CAPS_LOCK = 20, exports.KEY_ESCAPE = 27, exports.KEY_SPACE = 32, exports.KEY_PAGE_UP = 33, exports.KEY_PAGE_DOWN = 34, exports.KEY_END = 35, exports.KEY_HOME = 36, exports.KEY_LEFT = 37, exports.KEY_UP = 38, exports.KEY_RIGHT = 39, exports.KEY_DOWN = 40, exports.KEY_PRINTSCREEN = 44, exports.KEY_INSERT = 45, exports.KEY_DELETE = 46, exports.KEY_0 = 48, exports.KEY_1 = 49, exports.KEY_2 = 50, exports.KEY_3 = 51, exports.KEY_4 = 52, exports.KEY_5 = 53, exports.KEY_6 = 54, exports.KEY_7 = 55, exports.KEY_8 = 56, exports.KEY_9 = 57, exports.KEY_SEMICOLON = 59, exports.KEY_EQUALS = 61;
/*
    Basically, just copy-pasted functionality from fs-boilerplate v1.x, with some small changes (like we dont have angular.bind anymore, had to go with a workaround)
    There might be a better way to organise constatns but I need to know use-cases
*/
var FsUtil = (function () {
    function FsUtil() {
        this.intervals = {};
    }
    /**
    * @deprecated use @firestitch/common/util/guid instead
    */
    FsUtil.prototype.guid = function (pattern) {
        pattern = pattern || 'xxxxxx';
        return pattern.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    /**
     * @deprecated use import { uuid } from @firestitch/common/util; instead
    */
    FsUtil.prototype.uuid = function () {
        return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    };
    /**
     * @deprecated use import { resolve } from @firestitch/common/util; instead
    */
    FsUtil.prototype.resolve = function (promise, defaults) {
        if (defaults === void 0) { defaults = []; }
        var result = defaults;
        return new Promise(function (resolve) {
            promise.then(function (data) {
                Object.keys(data).forEach(function (key) { return result[key] = data[key]; });
                resolve(result);
            });
        });
    };
    /**
     * @deprecated use _.toInteger() instead
    */
    FsUtil.prototype.int = function (value) {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @deprecated use _.toFinite() instaed
    */
    FsUtil.prototype.float = function (value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @deprecated use _.toString() instead
    */
    FsUtil.prototype.string = function (string) {
        if (string === null || string === undefined) {
            string = '';
        }
        return (string).toString();
    };
    /**
     * @deprecated use import { isEmpty } from @firestitch/common/util; instead
    */
    FsUtil.prototype.isEmpty = function (value, options) {
        options = options || {};
        return value === undefined ||
            value === null ||
            value === false ||
            value === '' ||
            !this.string(value).length ||
            (this.isObject(value) &&
                (value.constructor.name === 'Object' && !Object.keys(value).length)) ||
            (!options.zero && (value === 0 || value === '0'));
    };
    /**
     * @deprecated use _.isInteger() instead
    */
    FsUtil.prototype.isInt = function (value, type) {
        var int = !!this.string(value).match(/^\d+$/);
        if (!int) {
            return false;
        }
        if (type) {
            return Number.isInteger(value);
        }
        return true;
    };
    /**
     * @deprecated use _.each() instead {@link https://lodash.com/docs/4.17.5#forEach}
    */
    FsUtil.prototype.each = function (object, func) {
        if (!this.isArray(object) && !this.isObject(object)) {
            return;
        }
        Object.keys(object).forEach(function (key) {
            func(object[key], key);
        });
    };
    /**
     * @deprecated use _.isArrayLikeObject() {@link https://lodash.com/docs/4.17.5#isArrayLikeObject}
     * or _.isObject() {@link https://lodash.com/docs/4.17.5#isObject} istead
    */
    FsUtil.prototype.isObject = function (value) {
        return value !== null && typeof value === 'object' && !this.isArray(value);
    };
    /**
      * @deprecated use _.isString() instead {@link https://lodash.com/docs/4.17.5#isString}
    */
    FsUtil.prototype.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * @deprecated use _.isArray() instead {@link https://lodash.com/docs/4.17.5#isArray}
    */
    FsUtil.prototype.isArray = function (value) {
        return value instanceof Array;
    };
    /**
     * @deprecated use import { isNumeric } from @firestitch/common/util; instead
    */
    FsUtil.prototype.isNumeric = function (value) {
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    };
    /**
     * @deprecated use import { isClass } from @firestitch/common/util; instead
    */
    FsUtil.prototype.isClass = function (value, cls) {
        if (this.isObject(value)) {
            if (this.isString(cls)) {
                if (value.constructor) {
                    if (value.constructor.name === cls) {
                        return true;
                    }
                }
            }
            else {
                if (value instanceof cls) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
      * @deprecated use _.isBoolean() instead {@link https://lodash.com/docs/4.17.5#isBoolean}
    */
    FsUtil.prototype.isBoolean = function (value) {
        return value === true || value === false;
    };
    /**
     * @deprecated use import { value } from @firestitch/common/util; instead
    */
    FsUtil.prototype.value = function (object, key, def) {
        if (this.isObject(object) || this.isArray(object)) {
            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }
        return def;
    };
    FsUtil.prototype.interval = function (fn, delay, name) {
        var instance = setInterval(fn, delay);
        if (name) {
            this.intervals[name] = instance;
        }
        return function () {
            window.clearInterval(instance);
        };
    };
    FsUtil.prototype.clearInterval = function (name) {
        var instance = this.intervals[name];
        if (instance) {
            window.clearInterval(instance);
        }
    };
    /**
     * @deprecated use import { isClass } from @firestitch/common/util; instead
    */
    FsUtil.prototype.throttle = function (func, wait) {
        var waiting = false; // Initially, we're not waiting
        return function () {
            if (!waiting) {
                func.apply(null, arguments); // Execute users function
                waiting = true; // Prevent future invocations
                setTimeout(function () {
                    waiting = false; // And allow future invocations
                }, wait);
            }
        };
    };
    /**
     * @deprecated use import { debounce } from @firestitch/common/util; instead
    */
    FsUtil.prototype.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    /**
     * @deprecated use import { length } from @firestitch/common/util; instead
    */
    FsUtil.prototype.length = function (object) {
        if (this.isObject(object)) {
            return Object.keys(object).length;
        }
        if (this.isArray(object)) {
            return object.length;
        }
        return 0;
    };
    /**
     * @deprecated use import { boolean } from @firestitch/common/util; instead
    */
    FsUtil.prototype.boolean = function (value) {
        return this.string(value).toLowerCase() !== 'false' && !!value;
    };
    /**
     * @deprecated use import { stringify } from @firestitch/common/util; instead
    */
    FsUtil.prototype.stringify = function (value) {
        return JSON.stringify(value);
    };
    FsUtil = __decorate([
        core_1.Injectable()
    ], FsUtil);
    return FsUtil;
}());
exports.FsUtil = FsUtil;
//# sourceMappingURL=fsutil.service.js.map