(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('fsarray.service'), require('fsmath.service'), require('fsutil.service')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'fsarray.service', 'fsmath.service', 'fsutil.service'], factory) :
	(factory((global['fs-common'] = {}),global.core,global.common,global.fsarray_service,global.fsmath_service,global.fsutil_service));
}(this, (function (exports,core,common,fsarray_service,fsmath_service,fsutil_service) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var KEY_CANCEL = 3;
var KEY_HELP = 6;
var KEY_BACKSPACE = 8;
var KEY_TAB = 9;
var KEY_CLEAR = 12;
var KEY_RETURN = 13;
var KEY_ENTER = 14;
var KEY_SHIFT = 16;
var KEY_CONTROL = 17;
var KEY_ALT = 18;
var KEY_PAUSE = 19;
var KEY_CAPS_LOCK = 20;
var KEY_ESCAPE = 27;
var KEY_SPACE = 32;
var KEY_PAGE_UP = 33;
var KEY_PAGE_DOWN = 34;
var KEY_END = 35;
var KEY_HOME = 36;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_PRINTSCREEN = 44;
var KEY_INSERT = 45;
var KEY_DELETE = 46;
var KEY_0 = 48;
var KEY_1 = 49;
var KEY_2 = 50;
var KEY_3 = 51;
var KEY_4 = 52;
var KEY_5 = 53;
var KEY_6 = 54;
var KEY_7 = 55;
var KEY_8 = 56;
var KEY_9 = 57;
var KEY_SEMICOLON = 59;
var KEY_EQUALS = 61;
var FsUtil$1 = (function () {
    function FsUtil$$1() {
        this.intervals = {};
    }
    /**
     * @param {?=} pattern
     * @return {?}
     */
    FsUtil$$1.prototype.guid = /**
     * @param {?=} pattern
     * @return {?}
     */
    function (pattern) {
        pattern = pattern || 'xxxxxx';
        return pattern.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    /**
     * @return {?}
     */
    FsUtil$$1.prototype.uuid = /**
     * @return {?}
     */
    function () {
        return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    };
    /**
     * @param {?} promise
     * @param {?=} defaults
     * @return {?}
     */
    FsUtil$$1.prototype.resolve = /**
     * @param {?} promise
     * @param {?=} defaults
     * @return {?}
     */
    function (promise, defaults) {
        if (defaults === void 0) { defaults = []; }
        var /** @type {?} */ result = defaults;
        return new Promise(function (resolve) {
            promise.then(function (data) {
                Object.keys(data).forEach(function (key) { return result[key] = data[key]; });
                resolve(result);
            });
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.int = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.float = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @param {?} string
     * @return {?}
     */
    FsUtil$$1.prototype.string = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        if (string === null || string === undefined) {
            string = '';
        }
        return string.toString();
    };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FsUtil$$1.prototype.isEmpty = /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        options = options || {};
        return value === undefined ||
            value === null ||
            value === '' ||
            (this.isObject(value) && (value.constructor.name == 'Object' && !Object.keys(value).length)) ||
            !value.length ||
            (!options.zero && (value === 0 || value === '0'));
    };
    /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    FsUtil$$1.prototype.isInt = /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    function (value, type) {
        var /** @type {?} */ int = !!this.string(value).match(/^\d+$/);
        if (!int) {
            return false;
        }
        if (type) {
            return Number.isInteger(value);
        }
        return true;
    };
    /**
     * @param {?} object
     * @param {?} func
     * @return {?}
     */
    FsUtil$$1.prototype.each = /**
     * @param {?} object
     * @param {?} func
     * @return {?}
     */
    function (object, func) {
        if (!this.isArray(object) && !this.isObject(object)) {
            return;
        }
        Object.keys(object).forEach(function (key) {
            func(object[key], key);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.isObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && typeof value === 'object' && !this.isArray(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.isString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.isArray = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof Array;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.isNumeric = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    };
    /**
     * @param {?} value
     * @param {?} cls
     * @return {?}
     */
    FsUtil$$1.prototype.isClass = /**
     * @param {?} value
     * @param {?} cls
     * @return {?}
     */
    function (value, cls) {
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
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.isBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === true || value === false;
    };
    /**
     * @param {?} object
     * @param {?} key
     * @param {?} def
     * @return {?}
     */
    FsUtil$$1.prototype.value = /**
     * @param {?} object
     * @param {?} key
     * @param {?} def
     * @return {?}
     */
    function (object, key, def) {
        if (this.isObject(object) || this.isArray(object)) {
            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }
        return def;
    };
    /**
     * @param {?} fn
     * @param {?} delay
     * @param {?} name
     * @return {?}
     */
    FsUtil$$1.prototype.interval = /**
     * @param {?} fn
     * @param {?} delay
     * @param {?} name
     * @return {?}
     */
    function (fn, delay, name) {
        var /** @type {?} */ instance = setInterval(fn, delay);
        if (name) {
            this.intervals[name] = instance;
        }
        return function () {
            window.clearInterval(instance);
        };
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FsUtil$$1.prototype.clearInterval = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ instance = this.intervals[name];
        if (instance) {
            window.clearInterval(instance);
        }
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    FsUtil$$1.prototype.throttle = /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        var /** @type {?} */ waiting = false; // Initially, we're not waiting
        return function () {
            // We return a throttled function
            if (!waiting) {
                // If we're not waiting
                func.apply(null, arguments); // Execute users function
                waiting = true; // Prevent future invocations
                setTimeout(function () {
                    // After a period of time
                    waiting = false; // And allow future invocations
                }, wait);
            }
        };
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    FsUtil$$1.prototype.debounce = /**
     * @param {?} func
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    function (func, wait, immediate) {
        var /** @type {?} */ timeout;
        return function () {
            var /** @type {?} */ context = this, /** @type {?} */ args = arguments;
            var /** @type {?} */ later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var /** @type {?} */ callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FsUtil$$1.prototype.length = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (this.isObject(object)) {
            return Object.keys(object).length;
        }
        if (this.isArray(object)) {
            return object.length;
        }
        return 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.boolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.string(value).toLowerCase() !== 'false' && !!value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil$$1.prototype.stringify = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return JSON.stringify(value);
    };
    FsUtil$$1.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsUtil$$1.ctorParameters = function () { return []; };
    return FsUtil$$1;
}());
var FsObject = (function () {
    function FsObject() {
    }
    return FsObject;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsUtilStringifyPipe = (function () {
    function FsUtilStringifyPipe(FsUtil$$1) {
        this.FsUtil = FsUtil$$1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtilStringifyPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.FsUtil.stringify(value);
    };
    FsUtilStringifyPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'fsUtilStringify'
                },] },
    ];
    /** @nocollapse */
    FsUtilStringifyPipe.ctorParameters = function () { return [
        { type: FsUtil$1, },
    ]; };
    return FsUtilStringifyPipe;
}());
var FsUtilGuidPipe = (function () {
    function FsUtilGuidPipe(FsUtil$$1) {
        this.FsUtil = FsUtil$$1;
    }
    /**
     * @return {?}
     */
    FsUtilGuidPipe.prototype.transform = /**
     * @return {?}
     */
    function () {
        return this.FsUtil.guid();
    };
    FsUtilGuidPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'fsUtilGuid'
                },] },
    ];
    /** @nocollapse */
    FsUtilGuidPipe.ctorParameters = function () { return [
        { type: FsUtil$1, },
    ]; };
    return FsUtilGuidPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsArray$1 = (function () {
    function FsArray$$1() {
    }
    /**
     * @param {?} array
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    FsArray$$1.prototype.nameValue = /**
     * @param {?} array
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (array, name, value) {
        var /** @type {?} */ list = [];
        if (name || value) {
            var /** @type {?} */ nameFn_1 = typeof name === 'function' ? name : function (item) { return item[name]; };
            var /** @type {?} */ valueFn_1 = typeof value === 'function' ? value : function (item) { return item[value]; };
            array.forEach(function (item) {
                list.push({ name: nameFn_1(item), value: valueFn_1(item) });
            });
        }
        else {
            array.forEach(function (name, value) {
                list.push({ name: name, value: value });
            });
        }
        return list;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray$$1.prototype.remove = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var /** @type {?} */ idx = this.indexOf(array, query);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return idx;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray$$1.prototype.indexOf = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var /** @type {?} */ queryObj_1 = query;
            query = function (item) {
                return _this.compare(queryObj_1, item);
            };
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = array.length; i < len; i++) {
            if (query(array[i])) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @param {?} query
     * @param {?} item
     * @return {?}
     */
    FsArray$$1.prototype.compare = /**
     * @param {?} query
     * @param {?} item
     * @return {?}
     */
    function (query, item) {
        var /** @type {?} */ value = true;
        for (var /** @type {?} */ key in query) {
            value = value && item[key] == query[key];
        }
        return value;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray$$1.prototype.filter = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var /** @type {?} */ queryObj_2 = query;
            query = function (item) {
                return _this.compare(queryObj_2, item);
            };
        }
        var /** @type {?} */ isarray = Array.isArray(array);
        var /** @type {?} */ list = isarray ? [] : {};
        if (isarray)
            array.forEach(function (item, idx) {
                if (query(item)) {
                    list.push(item);
                }
            });
        else
            Object.keys(array).forEach(function (key) {
                if (query(array[key])) {
                    list[key] = array[key];
                }
            });
        return list;
    };
    /**
     * @param {?} array
     * @param {?} property
     * @return {?}
     */
    FsArray$$1.prototype.index = /**
     * @param {?} array
     * @param {?} property
     * @return {?}
     */
    function (array, property) {
        var /** @type {?} */ list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @param {?=} reverse
     * @return {?}
     */
    FsArray$$1.prototype.sort = /**
     * @param {?} array
     * @param {?} query
     * @param {?=} reverse
     * @return {?}
     */
    function (array, query, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (typeof query !== 'function') {
            var /** @type {?} */ queryStr_1 = query;
            query = function (a, b) {
                if (reverse) {
                    if (a[queryStr_1] < b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] > b[queryStr_1]) {
                        return -1;
                    }
                }
                else {
                    if (a[queryStr_1] > b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] < b[queryStr_1]) {
                        return -1;
                    }
                }
                return 0;
            };
        }
        array.sort(query);
        return array;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray$$1.prototype.rsort = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        return this.sort(array, query, true);
    };
    /**
     * @param {?} array
     * @param {?} property
     * @param {?=} index
     * @return {?}
     */
    FsArray$$1.prototype.list = /**
     * @param {?} array
     * @param {?} property
     * @param {?=} index
     * @return {?}
     */
    function (array, property, index) {
        if (index === void 0) { index = null; }
        var /** @type {?} */ list = index ? {} : [];
        array.forEach(function (item, idx) {
            if (index) {
                list[item[index]] = item[property];
            }
            else {
                list.push(item[property]);
            }
        });
        return list;
    };
    /**
     * @param {?} objects
     * @param {?} parent_property
     * @param {?=} id_property
     * @param {?=} depth_property
     * @return {?}
     */
    FsArray$$1.prototype.applyDepth = /**
     * @param {?} objects
     * @param {?} parent_property
     * @param {?=} id_property
     * @param {?=} depth_property
     * @return {?}
     */
    function (objects, parent_property, id_property, depth_property) {
        if (id_property === void 0) { id_property = 'id'; }
        if (depth_property === void 0) { depth_property = 'depth'; }
        var /** @type {?} */ keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property])
                object[depth_property] = 0;
            keyed[object[id_property]] = object;
        });
        Object.keys(keyed).forEach(function (key) {
            Object.keys(keyed).forEach(function (key) {
                if (!keyed[key][depth_property]) {
                    if (keyed[key][parent_property]) {
                        keyed[key][depth_property] = keyed[keyed[key][parent_property]][depth_property] + 1;
                    }
                }
            });
        });
        return keyed;
    };
    /**
     * @param {?} values
     * @param {?} array
     * @return {?}
     */
    FsArray$$1.prototype.inArray = /**
     * @param {?} values
     * @param {?} array
     * @return {?}
     */
    function (values, array) {
        if (!Array.isArray(values)) {
            values = [values];
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = values.length; i < len; i++) {
            if (array.indexOf(values[i]) >= 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    FsArray$$1.prototype.keyExists = /**
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    function (array, key) {
        return array.hasOwnProperty(key);
    };
    /**
     * @param {?} array
     * @return {?}
     */
    FsArray$$1.prototype.length = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return array.length;
    };
    /**
     * @param {?} unordered
     * @return {?}
     */
    FsArray$$1.prototype.ksort = /**
     * @param {?} unordered
     * @return {?}
     */
    function (unordered) {
        Object.keys(unordered).sort().forEach(function (key) {
            var /** @type {?} */ value = unordered[key];
            delete unordered[key];
            unordered[key] = value;
        });
    };
    FsArray$$1.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsArray$$1.ctorParameters = function () { return []; };
    return FsArray$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMath$1 = (function () {
    function FsMath$$1() {
    }
    /**
     * @param {?} number
     * @param {?} precision
     * @return {?}
     */
    FsMath$$1.prototype.round = /**
     * @param {?} number
     * @param {?} precision
     * @return {?}
     */
    function (number, precision) {
        precision = precision || 0;
        var /** @type {?} */ factor = Math.pow(10, precision);
        var /** @type {?} */ tempNumber = number * factor;
        var /** @type {?} */ roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
    FsMath$$1.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsMath$$1.ctorParameters = function () { return []; };
    return FsMath$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsCommonModule = (function () {
    function FsCommonModule() {
    }
    /**
     * @return {?}
     */
    FsCommonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FsCommonModule,
            providers: [
                fsarray_service.FsArray,
                fsmath_service.FsMath,
                fsutil_service.FsUtil
            ]
        };
    };
    FsCommonModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        FsUtilStringifyPipe,
                        FsUtilGuidPipe
                    ],
                    providers: [
                        fsarray_service.FsArray,
                        fsmath_service.FsMath,
                        fsutil_service.FsUtil
                    ],
                    exports: [
                        FsUtilStringifyPipe,
                        FsUtilGuidPipe
                    ]
                },] },
    ];
    /** @nocollapse */
    FsCommonModule.ctorParameters = function () { return []; };
    return FsCommonModule;
}());

exports.FsCommonModule = FsCommonModule;
exports.KEY_CANCEL = KEY_CANCEL;
exports.KEY_HELP = KEY_HELP;
exports.KEY_BACKSPACE = KEY_BACKSPACE;
exports.KEY_TAB = KEY_TAB;
exports.KEY_CLEAR = KEY_CLEAR;
exports.KEY_RETURN = KEY_RETURN;
exports.KEY_ENTER = KEY_ENTER;
exports.KEY_SHIFT = KEY_SHIFT;
exports.KEY_CONTROL = KEY_CONTROL;
exports.KEY_ALT = KEY_ALT;
exports.KEY_PAUSE = KEY_PAUSE;
exports.KEY_CAPS_LOCK = KEY_CAPS_LOCK;
exports.KEY_ESCAPE = KEY_ESCAPE;
exports.KEY_SPACE = KEY_SPACE;
exports.KEY_PAGE_UP = KEY_PAGE_UP;
exports.KEY_PAGE_DOWN = KEY_PAGE_DOWN;
exports.KEY_END = KEY_END;
exports.KEY_HOME = KEY_HOME;
exports.KEY_LEFT = KEY_LEFT;
exports.KEY_UP = KEY_UP;
exports.KEY_RIGHT = KEY_RIGHT;
exports.KEY_DOWN = KEY_DOWN;
exports.KEY_PRINTSCREEN = KEY_PRINTSCREEN;
exports.KEY_INSERT = KEY_INSERT;
exports.KEY_DELETE = KEY_DELETE;
exports.KEY_0 = KEY_0;
exports.KEY_1 = KEY_1;
exports.KEY_2 = KEY_2;
exports.KEY_3 = KEY_3;
exports.KEY_4 = KEY_4;
exports.KEY_5 = KEY_5;
exports.KEY_6 = KEY_6;
exports.KEY_7 = KEY_7;
exports.KEY_8 = KEY_8;
exports.KEY_9 = KEY_9;
exports.KEY_SEMICOLON = KEY_SEMICOLON;
exports.KEY_EQUALS = KEY_EQUALS;
exports.FsUtil = FsUtil$1;
exports.FsObject = FsObject;
exports.FsArray = FsArray$1;
exports.FsMath = FsMath$1;
exports.FsUtilStringifyPipe = FsUtilStringifyPipe;
exports.FsUtilGuidPipe = FsUtilGuidPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
