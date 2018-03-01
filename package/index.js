(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/common", ["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/common"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["@firestitch/common"] = factory(root["@angular/core"], root["@angular/common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fs-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var fsarray_service_1 = __webpack_require__("./services/fsarray.service.ts");
var fsmath_service_1 = __webpack_require__("./services/fsmath.service.ts");
var fsutil_service_1 = __webpack_require__("./services/fsutil.service.ts");
var fsvaildate_service_1 = __webpack_require__("./services/fsvaildate.service.ts");
var fsutil_pipe_1 = __webpack_require__("./services/fsutil.pipe.ts");
var FsCommonModule = (function () {
    function FsCommonModule() {
    }
    FsCommonModule_1 = FsCommonModule;
    FsCommonModule.forRoot = function () {
        return {
            ngModule: FsCommonModule_1,
            providers: [
                fsarray_service_1.FsArray,
                fsmath_service_1.FsMath,
                fsutil_service_1.FsUtil,
                fsvaildate_service_1.FsValidate
            ]
        };
    };
    FsCommonModule = FsCommonModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                fsutil_pipe_1.FsUtilGuidPipe,
                fsutil_pipe_1.FsUtilStringifyPipe
            ],
            entryComponents: [],
            declarations: [
                fsutil_pipe_1.FsUtilGuidPipe,
                fsutil_pipe_1.FsUtilStringifyPipe
            ],
            providers: [
                fsarray_service_1.FsArray,
                fsmath_service_1.FsMath,
                fsutil_service_1.FsUtil,
                fsvaildate_service_1.FsValidate
            ]
        })
    ], FsCommonModule);
    return FsCommonModule;
    var FsCommonModule_1;
}());
exports.FsCommonModule = FsCommonModule;


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-common.module.ts"));
__export(__webpack_require__("./services/fsarray.service.ts"));
__export(__webpack_require__("./services/fsmath.service.ts"));
__export(__webpack_require__("./services/fsutil.pipe.ts"));
__export(__webpack_require__("./services/fsutil.service.ts"));
__export(__webpack_require__("./services/fsvaildate.service.ts"));


/***/ }),

/***/ "./services/fsarray.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var FsArray = (function () {
    function FsArray() {
    }
    FsArray.prototype.nameValue = function (array, name, value) {
        var list = [];
        if (name || value) {
            var nameFn_1 = typeof name === 'function' ? name : function (item) { return item[name]; };
            var valueFn_1 = typeof value === 'function' ? value : function (item) { return item[value]; };
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
    FsArray.prototype.remove = function (array, query) {
        var idx = this.indexOf(array, query);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return idx;
    };
    FsArray.prototype.indexOf = function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var queryObj_1 = query;
            query = function (item) {
                return _this.compare(queryObj_1, item);
            };
        }
        for (var i = 0, len = array.length; i < len; i++) {
            if (query(array[i])) {
                return i;
            }
        }
        return -1;
    };
    FsArray.prototype.compare = function (query, item) {
        var value = true;
        for (var key in query) {
            value = value && item[key] == query[key];
        }
        return value;
    };
    FsArray.prototype.filter = function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var queryObj_2 = query;
            query = function (item) {
                return _this.compare(queryObj_2, item);
            };
        }
        var isarray = Array.isArray(array);
        var list = isarray ? [] : {};
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
    FsArray.prototype.index = function (array, property) {
        var list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    };
    FsArray.prototype.sort = function (array, query, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (typeof query !== 'function') {
            var queryStr_1 = query;
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
    FsArray.prototype.rsort = function (array, query) {
        return this.sort(array, query, true);
    };
    FsArray.prototype.list = function (array, property, index) {
        if (index === void 0) { index = null; }
        var list = index ? {} : [];
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
    FsArray.prototype.applyDepth = function (objects, parent_property, id_property, depth_property) {
        if (id_property === void 0) { id_property = 'id'; }
        if (depth_property === void 0) { depth_property = 'depth'; }
        var keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property])
                object[depth_property] = 0;
            keyed[object[id_property]] = object;
        });
        Object.keys(keyed).forEach(function (key) {
            Object.keys(keyed).forEach(function (key) {
                var object = keyed[key];
                if (!keyed[key][depth_property]) {
                    if (keyed[key][parent_property]) {
                        keyed[key][depth_property] = keyed[keyed[key][parent_property]][depth_property] + 1;
                    }
                }
            });
        });
        return keyed;
    };
    FsArray.prototype.inArray = function (values, array) {
        if (!Array.isArray(values)) {
            values = [values];
        }
        for (var i = 0, len = values.length; i < len; i++) {
            if (array.indexOf(values[i]) >= 0) {
                return true;
            }
        }
        return false;
    };
    FsArray.prototype.keyExists = function (array, key) {
        return array.hasOwnProperty(key);
    };
    FsArray.prototype.length = function (array) {
        return array.length;
    };
    FsArray.prototype.ksort = function (unordered) {
        Object.keys(unordered).sort().forEach(function (key) {
            var value = unordered[key];
            delete unordered[key];
            unordered[key] = value;
        });
    };
    FsArray = __decorate([
        core_1.Injectable()
    ], FsArray);
    return FsArray;
}());
exports.FsArray = FsArray;


/***/ }),

/***/ "./services/fsmath.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var FsMath = (function () {
    function FsMath() {
    }
    FsMath.prototype.round = function (number, precision) {
        precision = precision || 0;
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
    FsMath = __decorate([
        core_1.Injectable()
    ], FsMath);
    return FsMath;
}());
exports.FsMath = FsMath;


/***/ }),

/***/ "./services/fsutil.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var fsutil_service_1 = __webpack_require__("./services/fsutil.service.ts");
var FsUtilStringifyPipe = (function () {
    function FsUtilStringifyPipe(FsUtil) {
        this.FsUtil = FsUtil;
    }
    FsUtilStringifyPipe.prototype.transform = function (value) {
        return this.FsUtil.stringify(value);
    };
    FsUtilStringifyPipe = __decorate([
        core_1.Pipe({
            name: 'fsUtilStringify'
        }),
        __metadata("design:paramtypes", [fsutil_service_1.FsUtil])
    ], FsUtilStringifyPipe);
    return FsUtilStringifyPipe;
}());
exports.FsUtilStringifyPipe = FsUtilStringifyPipe;
var FsUtilGuidPipe = (function () {
    function FsUtilGuidPipe(FsUtil) {
        this.FsUtil = FsUtil;
    }
    FsUtilGuidPipe.prototype.transform = function () {
        return this.FsUtil.guid();
    };
    FsUtilGuidPipe = __decorate([
        core_1.Pipe({
            name: 'fsUtilGuid'
        }),
        __metadata("design:paramtypes", [fsutil_service_1.FsUtil])
    ], FsUtilGuidPipe);
    return FsUtilGuidPipe;
}());
exports.FsUtilGuidPipe = FsUtilGuidPipe;


/***/ }),

/***/ "./services/fsutil.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
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


/***/ }),

/***/ "./services/fsvaildate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var fsutil_service_1 = __webpack_require__("./services/fsutil.service.ts");
var FsValidate = (function () {
    function FsValidate(fsUtil) {
        this.fsUtil = fsUtil;
    }
    /**
     * @deprecated use import { email } from @firestitch/common/validate; instead
    */
    FsValidate.prototype.phone = function (value) {
        var valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
        return valid || !String(value).length;
    };
    /**
      * @deprecated use import { email } from @firestitch/common/validate; instead
    */
    FsValidate.prototype.email = function (value) {
        return !!this.fsUtil.string(value).match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    FsValidate = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [fsutil_service_1.FsUtil])
    ], FsValidate);
    return FsValidate;
}());
exports.FsValidate = FsValidate;


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map