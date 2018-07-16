(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/common", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/common"] = factory();
	else
		root["@firestitch/common"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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

/***/ "./format/acronym/acronym.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function acronym(str, length) {
    if (length === void 0) { length = 2; }
    var splittedString = str
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(' ');
    var result = '';
    for (var i = 0; i < length; i++) {
        if (!splittedString[i]) {
            if (splittedString.length === 1) {
                for (var j = 1; j < length; j++) {
                    if (!splittedString[i - 1][j]) {
                        break;
                    }
                    result += splittedString[i - 1][j].toUpperCase();
                }
            }
            break;
        }
        result += splittedString[i][0].toUpperCase();
    }
    return result;
}
exports.acronym = acronym;


/***/ }),

/***/ "./format/acronym/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./format/acronym/acronym.ts"));


/***/ }),

/***/ "./format/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./format/number/index.ts"));
__export(__webpack_require__("./format/acronym/index.ts"));


/***/ }),

/***/ "./format/number/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./format/number/number.ts"));
__export(__webpack_require__("./format/number/number.pipe.ts"));


/***/ }),

/***/ "./format/number/number.pipe.ts":
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
var number_1 = __webpack_require__("./format/number/number.ts");
var FsFormatNumberPipe = (function () {
    function FsFormatNumberPipe() {
    }
    FsFormatNumberPipe.prototype.transform = function (value, decimals) {
        return number_1.number(value, decimals);
    };
    FsFormatNumberPipe = __decorate([
        core_1.Pipe({
            name: 'fsFormatNumber'
        })
    ], FsFormatNumberPipe);
    return FsFormatNumberPipe;
}());
exports.FsFormatNumberPipe = FsFormatNumberPipe;


/***/ }),

/***/ "./format/number/number.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function number(value, decimals) {
    return value.toLocaleString(undefined, { maximumFractionDigits: decimals });
}
exports.number = number;


/***/ }),

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
var fsutil_pipe_1 = __webpack_require__("./pipes/fsutil.pipe.ts");
var format_1 = __webpack_require__("./format/index.ts");
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
                fsutil_pipe_1.FsUtilStringifyPipe,
                format_1.FsFormatNumberPipe,
                fsutil_pipe_1.FsUtilIsEmptyPipe,
                fsutil_pipe_1.FsUtilIsNotEmptyPipe
            ],
            entryComponents: [],
            declarations: [
                fsutil_pipe_1.FsUtilGuidPipe,
                fsutil_pipe_1.FsUtilIsEmptyPipe,
                fsutil_pipe_1.FsUtilIsNotEmptyPipe,
                fsutil_pipe_1.FsUtilStringifyPipe,
                format_1.FsFormatNumberPipe
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
__export(__webpack_require__("./services/fsutil.service.ts"));
__export(__webpack_require__("./services/fsvaildate.service.ts"));
__export(__webpack_require__("./pipes/fsutil.pipe.ts"));


/***/ }),

/***/ "./pipes/fsutil.pipe.ts":
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
var util_1 = __webpack_require__("./util/index.ts");
var FsUtilStringifyPipe = (function () {
    function FsUtilStringifyPipe() {
    }
    FsUtilStringifyPipe.prototype.transform = function (value) {
        return util_1.stringify(value);
    };
    FsUtilStringifyPipe = __decorate([
        core_1.Pipe({
            name: 'fsUtilStringify'
        }),
        __metadata("design:paramtypes", [])
    ], FsUtilStringifyPipe);
    return FsUtilStringifyPipe;
}());
exports.FsUtilStringifyPipe = FsUtilStringifyPipe;
var FsUtilGuidPipe = (function () {
    function FsUtilGuidPipe() {
    }
    FsUtilGuidPipe.prototype.transform = function () {
        return util_1.guid();
    };
    FsUtilGuidPipe = __decorate([
        core_1.Pipe({
            name: 'fsUtilGuid'
        }),
        __metadata("design:paramtypes", [])
    ], FsUtilGuidPipe);
    return FsUtilGuidPipe;
}());
exports.FsUtilGuidPipe = FsUtilGuidPipe;
var FsUtilIsEmptyPipe = (function () {
    function FsUtilIsEmptyPipe() {
    }
    FsUtilIsEmptyPipe.prototype.transform = function (value) {
        return util_1.isEmpty(value);
    };
    FsUtilIsEmptyPipe = __decorate([
        core_1.Pipe({
            name: 'fsUtilIsEmpty'
        })
    ], FsUtilIsEmptyPipe);
    return FsUtilIsEmptyPipe;
}());
exports.FsUtilIsEmptyPipe = FsUtilIsEmptyPipe;
var FsUtilIsNotEmptyPipe = (function () {
    function FsUtilIsNotEmptyPipe() {
    }
    FsUtilIsNotEmptyPipe.prototype.transform = function (value) {
        return !util_1.isEmpty(value);
    };
    FsUtilIsNotEmptyPipe = __decorate([
        core_1.Pipe({
            name: 'fsUtilIsNotEmpty'
        })
    ], FsUtilIsNotEmptyPipe);
    return FsUtilIsNotEmptyPipe;
}());
exports.FsUtilIsNotEmptyPipe = FsUtilIsNotEmptyPipe;


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
    /**
     * @deprecated use import { nameValue } from @firestitch/common/array; instead
    */
    FsArray.prototype.nameValue = function (array, name, value) {
        console.warn('@deprecated use import { nameValue } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use import { remove } from @firestitch/common/array; instead
    */
    FsArray.prototype.remove = function (array, query) {
        console.warn('@deprecated use import { remove } from @firestitch/common/array; instead');
        var idx = this.indexOf(array, query);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return idx;
    };
    /**
     * @deprecated use import { indexOf } from @firestitch/common/array; instead
    */
    FsArray.prototype.indexOf = function (array, query) {
        var _this = this;
        console.warn('@deprecated use import { indexOf } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use import { compare } from @firestitch/common/array; instead
    */
    FsArray.prototype.compare = function (query, item) {
        console.warn('@deprecated use import { compare } from @firestitch/common/array; instead');
        var value = true;
        for (var key in query) {
            value = value && item[key] == query[key];
        }
        return value;
    };
    /**
     * @deprecated use import { filter } from @firestitch/common/array; instead
    */
    FsArray.prototype.filter = function (array, query) {
        var _this = this;
        console.warn('@deprecated use import { filter } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use import { index } from @firestitch/common/array; instead
    */
    FsArray.prototype.index = function (array, property) {
        console.warn('@deprecated use import { index } from @firestitch/common/array; instead');
        var list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    };
    /**
     * @deprecated use import { sort } from @firestitch/common/array; instead
    */
    FsArray.prototype.sort = function (array, query, reverse) {
        if (reverse === void 0) { reverse = false; }
        console.warn('@deprecated use import { sort } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use import { rsort } from @firestitch/common/array; instead
    */
    FsArray.prototype.rsort = function (array, query) {
        console.warn('@deprecated use import { rsort } from @firestitch/common/array; instead');
        return this.sort(array, query, true);
    };
    /**
     * @deprecated use import { list } from @firestitch/common/array; instead
    */
    FsArray.prototype.list = function (array, property, index) {
        if (index === void 0) { index = null; }
        console.warn('@deprecated use import { list } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use import { applyDepth } from @firestitch/common/array; instead
    */
    FsArray.prototype.applyDepth = function (objects, parent_property, id_property, depth_property) {
        if (id_property === void 0) { id_property = 'id'; }
        if (depth_property === void 0) { depth_property = 'depth'; }
        console.warn('@deprecated use import { applyDepth } from @firestitch/common/array; instead');
        var keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property]) {
                object[depth_property] = 0;
            }
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
    /**
     * @deprecated use import { inArray } from @firestitch/common/array; instead
    */
    FsArray.prototype.inArray = function (values, array) {
        console.warn('@deprecated use import { inArray } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use import { keyExists } from @firestitch/common/array; instead
    */
    FsArray.prototype.keyExists = function (array, key) {
        console.warn('@deprecated use import { keyExists } from @firestitch/common/array; instead');
        return array.hasOwnProperty(key);
    };
    /**
     * @deprecated use import { length } from @firestitch/common/array; instead
    */
    FsArray.prototype.length = function (array) {
        console.warn('@deprecated use import { length } from @firestitch/common/array; instead');
        return array.length;
    };
    /**
     * @deprecated use import { ksort } from @firestitch/common/array; instead
    */
    FsArray.prototype.ksort = function (unordered) {
        console.warn('@deprecated use import { ksort } from @firestitch/common/array; instead');
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
    /**
     * @deprecated use _.round() instead {@link https://lodash.com/docs/4.17.5#round}
    */
    FsMath.prototype.round = function (number, precision) {
        console.warn('@deprecated use _.round() instead {@link https://lodash.com/docs/4.17.5#round}');
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
        console.warn('@deprecated use @firestitch/common/util/guid instead');
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
        console.warn('@deprecated use @firestitch/common/util/uuid instead');
        return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    };
    /**
     * @deprecated use import { resolve } from @firestitch/common/util; instead
    */
    FsUtil.prototype.resolve = function (promise, defaults) {
        if (defaults === void 0) { defaults = []; }
        console.warn('@deprecated use @firestitch/common/util/resolve instead');
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
        console.warn('@deprecated use _.toInteger() instead');
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @deprecated use _.toFinite() instead
    */
    FsUtil.prototype.float = function (value) {
        console.warn('@deprecated use _.toFinite() instead');
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
        console.warn('@deprecated use _.toString() instead');
        if (string === null || string === undefined) {
            string = '';
        }
        return (string).toString();
    };
    /**
     * @deprecated use import { isEmpty } from @firestitch/common/util; instead
    */
    FsUtil.prototype.isEmpty = function (value, options) {
        console.warn('@deprecated use import { isEmpty } from @firestitch/common/util; instead');
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
        console.warn('@deprecated use _.isInteger() instead');
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
        console.warn('@deprecated use _.each() instead {@link https://lodash.com/docs/4.17.5#forEach}');
        if (!this.isArray(object) && !this.isObject(object)) {
            return;
        }
        Object.keys(object).forEach(function (key) {
            func(object[key], key);
        });
    };
    /**
     * @deprecated use _.isArrayLikeObject() {@link https://lodash.com/docs/4.17.5#isArrayLikeObject}
     * or _.isObject() {@link https://lodash.com/docs/4.17.5#isObject} instead
    */
    FsUtil.prototype.isObject = function (value) {
        console.warn('@deprecated use _.isArrayLikeObject() {@link https://lodash.com/docs/4.17.5#isArrayLikeObject} or _.isObject() {@link https://lodash.com/docs/4.17.5#isObject} instead');
        return value !== null && typeof value === 'object' && !this.isArray(value);
    };
    /**
      * @deprecated use _.isString() instead {@link https://lodash.com/docs/4.17.5#isString}
    */
    FsUtil.prototype.isString = function (value) {
        console.warn('@deprecated use _.isString() instead {@link https://lodash.com/docs/4.17.5#isString}');
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * @deprecated use _.isArray() instead {@link https://lodash.com/docs/4.17.5#isArray}
    */
    FsUtil.prototype.isArray = function (value) {
        console.warn('@deprecated use _.isArray() instead {@link https://lodash.com/docs/4.17.5#isArray}');
        return value instanceof Array;
    };
    /**
     * @deprecated use import { isNumeric } from @firestitch/common/util; instead
    */
    FsUtil.prototype.isNumeric = function (value) {
        console.warn('@deprecated use import { isNumeric } from @firestitch/common/util; instead');
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    };
    /**
     * @deprecated use import { isClass } from @firestitch/common/util; instead
    */
    FsUtil.prototype.isClass = function (value, cls) {
        console.warn('@deprecated use import { isClass } from @firestitch/common/util; instead');
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
        console.warn('@deprecated use _.isBoolean() instead {@link https://lodash.com/docs/4.17.5#isBoolean}');
        return value === true || value === false;
    };
    /**
     * @deprecated use import { value } from @firestitch/common/util; instead
    */
    FsUtil.prototype.value = function (object, key, def) {
        console.warn('@deprecated use import { value } from @firestitch/common/util; instead');
        if (this.isObject(object) || this.isArray(object)) {
            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }
        return def;
    };
    FsUtil.prototype.throttle = function (func, wait) {
        console.warn('@deprecated use import { throttle } from @firestitch/common/util; instead');
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
        console.warn('@deprecated use import { debounce } from @firestitch/common/util; instead');
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
        console.warn('@deprecated use import { length } from @firestitch/common/util; instead');
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
        console.warn('@deprecated use import { boolean } from @firestitch/common/util; instead');
        return this.string(value).toLowerCase() !== 'false' && !!value;
    };
    /**
     * @deprecated use import { stringify } from @firestitch/common/util; instead
    */
    FsUtil.prototype.stringify = function (value) {
        console.warn('@deprecated use import { stringify } from @firestitch/common/util; instead');
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

/***/ "./util/boolean/boolean.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("lodash");
function boolean(value) {
    return lodash_1.toString(value).toLowerCase() !== 'false' && !!value;
}
exports.boolean = boolean;


/***/ }),

/***/ "./util/boolean/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/boolean/boolean.ts"));


/***/ }),

/***/ "./util/debounce/debounce.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, wait, immediate) {
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
}
exports.debounce = debounce;


/***/ }),

/***/ "./util/debounce/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/debounce/debounce.ts"));


/***/ }),

/***/ "./util/guid/guid.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function guid(pattern) {
    pattern = pattern || 'xxxxxx';
    return pattern.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.guid = guid;


/***/ }),

/***/ "./util/guid/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/guid/guid.ts"));


/***/ }),

/***/ "./util/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/boolean/index.ts"));
__export(__webpack_require__("./util/debounce/index.ts"));
__export(__webpack_require__("./util/guid/index.ts"));
__export(__webpack_require__("./util/keys/index.ts"));
__export(__webpack_require__("./util/length/index.ts"));
__export(__webpack_require__("./util/resolve/index.ts"));
__export(__webpack_require__("./util/stringify/index.ts"));
__export(__webpack_require__("./util/uuid/index.ts"));
__export(__webpack_require__("./util/value/index.ts"));
__export(__webpack_require__("./util/isClass/index.ts"));
__export(__webpack_require__("./util/isNumeric/index.ts"));
__export(__webpack_require__("./util/isEmpty/index.ts"));
__export(__webpack_require__("./util/throttle/index.ts"));


/***/ }),

/***/ "./util/isClass/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/isClass/isClass.ts"));


/***/ }),

/***/ "./util/isClass/isClass.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("util");
function isClass(value, cls) {
    if (util_1.isObject(value)) {
        if (util_1.isString(cls)) {
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
}
exports.isClass = isClass;


/***/ }),

/***/ "./util/isEmpty/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/isEmpty/isEmpty.ts"));


/***/ }),

/***/ "./util/isEmpty/isEmpty.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("lodash");
function isEmpty(value, options) {
    options = options || {};
    return value === undefined ||
        value === null ||
        value === false ||
        value === '' ||
        !lodash_1.toString(value).length ||
        (lodash_1.isObject(value) &&
            (value.constructor.name === 'Object' && !Object.keys(value).length)) ||
        (!options.zero && (value === 0 || value === '0'));
}
exports.isEmpty = isEmpty;


/***/ }),

/***/ "./util/isNumeric/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/isNumeric/isNumeric.ts"));


/***/ }),

/***/ "./util/isNumeric/isNumeric.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("lodash");
function isNumeric(value) {
    var str = lodash_1.toString(value);
    return str.length && !!str.match(/^-?\d*\.?\d*$/);
}
exports.isNumeric = isNumeric;


/***/ }),

/***/ "./util/keys/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/keys/keys.ts"));


/***/ }),

/***/ "./util/keys/keys.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_CANCEL = 3;
exports.KEY_HELP = 6;
exports.KEY_BACKSPACE = 8;
exports.KEY_TAB = 9;
exports.KEY_CLEAR = 12;
exports.KEY_RETURN = 13;
exports.KEY_ENTER = 14;
exports.KEY_SHIFT = 16;
exports.KEY_CONTROL = 17;
exports.KEY_ALT = 18;
exports.KEY_PAUSE = 19;
exports.KEY_CAPS_LOCK = 20;
exports.KEY_ESCAPE = 27;
exports.KEY_SPACE = 32;
exports.KEY_PAGE_UP = 33;
exports.KEY_PAGE_DOWN = 34;
exports.KEY_END = 35;
exports.KEY_HOME = 36;
exports.KEY_LEFT = 37;
exports.KEY_UP = 38;
exports.KEY_RIGHT = 39;
exports.KEY_DOWN = 40;
exports.KEY_PRINTSCREEN = 44;
exports.KEY_INSERT = 45;
exports.KEY_DELETE = 46;
exports.KEY_0 = 48;
exports.KEY_1 = 49;
exports.KEY_2 = 50;
exports.KEY_3 = 51;
exports.KEY_4 = 52;
exports.KEY_5 = 53;
exports.KEY_6 = 54;
exports.KEY_7 = 55;
exports.KEY_8 = 56;
exports.KEY_9 = 57;
exports.KEY_SEMICOLON = 59;
exports.KEY_EQUALS = 61;


/***/ }),

/***/ "./util/length/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/length/length.ts"));


/***/ }),

/***/ "./util/length/length.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("lodash");
function length(object) {
    if (lodash_1.isObject(object)) {
        return Object.keys(object).length;
    }
    if (lodash_1.isArray(object)) {
        return object.length;
    }
    return 0;
}
exports.length = length;


/***/ }),

/***/ "./util/resolve/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/resolve/resolve.ts"));


/***/ }),

/***/ "./util/resolve/resolve.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resolve(promise, defaults) {
    if (defaults === void 0) { defaults = []; }
    var result = defaults;
    return new Promise(function (resolve) {
        promise.then(function (data) {
            Object.keys(data).forEach(function (key) { return result[key] = data[key]; });
            resolve(result);
        });
    });
}
exports.resolve = resolve;


/***/ }),

/***/ "./util/stringify/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/stringify/stringify.ts"));


/***/ }),

/***/ "./util/stringify/stringify.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
exports.stringify = stringify;


/***/ }),

/***/ "./util/throttle/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/throttle/throttle.ts"));


/***/ }),

/***/ "./util/throttle/throttle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function throttle(func, wait) {
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
}
exports.throttle = throttle;


/***/ }),

/***/ "./util/uuid/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/uuid/uuid.ts"));


/***/ }),

/***/ "./util/uuid/uuid.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__("./util/guid/index.ts");
function uuid() {
    return guid_1.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
}
exports.uuid = uuid;


/***/ }),

/***/ "./util/value/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./util/value/value.ts"));


/***/ }),

/***/ "./util/value/value.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("util");
function value(object, key, def) {
    if (util_1.isObject(object) || Array.isArray(object)) {
        if (object.hasOwnProperty(key)) {
            return object[key];
        }
    }
    return def;
}
exports.value = value;


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "util":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map