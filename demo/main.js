webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsarray-example/fsarray-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}", "", {"version":3,"sources":["/Users/mendor/work/fs-common/fsarray-example.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,oBAAA;EACA,0BAAA;EACA,YAAA;CACD;;AAED;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;CACD","file":"fsarray-example.component.css","sourcesContent":[".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsmath-example/fsmath-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}", "", {"version":3,"sources":["/Users/mendor/work/fs-common/fsmath-example.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,oBAAA;EACA,0BAAA;EACA,YAAA;CACD;;AAED;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;CACD","file":"fsmath-example.component.css","sourcesContent":[".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsutil-example/fsutil-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}", "", {"version":3,"sources":["/Users/mendor/work/fs-common/fsutil-example.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,oBAAA;EACA,0BAAA;EACA,YAAA;CACD;;AAED;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;CACD","file":"fsutil-example.component.css","sourcesContent":[".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/fs-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var fsarray_service_1 = __webpack_require__("../src/services/fsarray.service.ts");
var fsmath_service_1 = __webpack_require__("../src/services/fsmath.service.ts");
var fsutil_service_1 = __webpack_require__("../src/services/fsutil.service.ts");
var fsvaildate_service_1 = __webpack_require__("../src/services/fsvaildate.service.ts");
var fsutil_pipe_1 = __webpack_require__("../src/services/fsutil.pipe.ts");
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

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-common.module.ts"));
__export(__webpack_require__("../src/services/fsarray.service.ts"));
__export(__webpack_require__("../src/services/fsmath.service.ts"));
__export(__webpack_require__("../src/services/fsutil.pipe.ts"));
__export(__webpack_require__("../src/services/fsutil.service.ts"));
__export(__webpack_require__("../src/services/fsvaildate.service.ts"));


/***/ }),

/***/ "../src/services/fsarray.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
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

/***/ "../src/services/fsmath.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
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

/***/ "../src/services/fsutil.pipe.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsutil_service_1 = __webpack_require__("../src/services/fsutil.service.ts");
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

/***/ "../src/services/fsutil.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
exports.KEY_CANCEL = 3, exports.KEY_HELP = 6, exports.KEY_BACKSPACE = 8, exports.KEY_TAB = 9, exports.KEY_CLEAR = 12, exports.KEY_RETURN = 13, exports.KEY_ENTER = 14, exports.KEY_SHIFT = 16, exports.KEY_CONTROL = 17, exports.KEY_ALT = 18, exports.KEY_PAUSE = 19, exports.KEY_CAPS_LOCK = 20, exports.KEY_ESCAPE = 27, exports.KEY_SPACE = 32, exports.KEY_PAGE_UP = 33, exports.KEY_PAGE_DOWN = 34, exports.KEY_END = 35, exports.KEY_HOME = 36, exports.KEY_LEFT = 37, exports.KEY_UP = 38, exports.KEY_RIGHT = 39, exports.KEY_DOWN = 40, exports.KEY_PRINTSCREEN = 44, exports.KEY_INSERT = 45, exports.KEY_DELETE = 46, exports.KEY_0 = 48, exports.KEY_1 = 49, exports.KEY_2 = 50, exports.KEY_3 = 51, exports.KEY_4 = 52, exports.KEY_5 = 53, exports.KEY_6 = 54, exports.KEY_7 = 55, exports.KEY_8 = 56, exports.KEY_9 = 57, exports.KEY_SEMICOLON = 59, exports.KEY_EQUALS = 61;
/*
    Basically, just copy-pasted functionality from fs-boilerplate v1.x, with some small changes (like we dont have angular.bind anymore, had to go with a workaround)
    There might be a better way to organise constatns but I need to know use-cases
*/
var FsUtil = (function () {
    function FsUtil() {
        this.intervals = {};
    }
    FsUtil.prototype.guid = function (pattern) {
        pattern = pattern || 'xxxxxx';
        return pattern.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    FsUtil.prototype.uuid = function () {
        return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    };
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
    FsUtil.prototype.int = function (value) {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    FsUtil.prototype.float = function (value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    FsUtil.prototype.string = function (string) {
        if (string === null || string === undefined) {
            string = '';
        }
        return (string).toString();
    };
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
    FsUtil.prototype.each = function (object, func) {
        if (!this.isArray(object) && !this.isObject(object)) {
            return;
        }
        Object.keys(object).forEach(function (key) {
            func(object[key], key);
        });
    };
    FsUtil.prototype.isObject = function (value) {
        return value !== null && typeof value === 'object' && !this.isArray(value);
    };
    FsUtil.prototype.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    FsUtil.prototype.isArray = function (value) {
        return value instanceof Array;
    };
    FsUtil.prototype.isNumeric = function (value) {
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    };
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
    FsUtil.prototype.isBoolean = function (value) {
        return value === true || value === false;
    };
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
    FsUtil.prototype.length = function (object) {
        if (this.isObject(object)) {
            return Object.keys(object).length;
        }
        if (this.isArray(object)) {
            return object.length;
        }
        return 0;
    };
    FsUtil.prototype.boolean = function (value) {
        return this.string(value).toLowerCase() !== 'false' && !!value;
    };
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

/***/ "../src/services/fsvaildate.service.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsutil_service_1 = __webpack_require__("../src/services/fsutil.service.ts");
var FsValidate = (function () {
    function FsValidate(fsUtil) {
        this.fsUtil = fsUtil;
    }
    FsValidate.prototype.phone = function (value) {
        var valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
        return valid || !String(value).length;
    };
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

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>FsCommon Examples</h1>\n<div class=\"example\">\n    <fs-example title=\"FsArray\" componentName=\"fsarray-example\">\n        <fsarray-example></fsarray-example>\n    </fs-example>\n</div>\n<div class=\"example\">\n  <fs-example title=\"FsUtil\" componentName=\"fsutil-example\">\n      <fsutil-example></fsutil-example>\n  </fs-example>\n</div>\n<div class=\"example\">\n  <fs-example title=\"FsMath\" componentName=\"fsmath-example\">\n      <fsmath-example></fsmath-example>\n  </fs-example>\n</div>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/fsarray-example/fsarray-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsarray-example/fsarray-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/fsarray-example/fsarray-example.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Initial array: {{array|fsUtilStringify}}</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Description</th>\n      <th>Code</th>\n      <th>Result</th>\n    </tr>\n  </thead>\n  <tr *ngFor=\"let example of examples\">\n      <td>{{example.name}}</td>\n      <td>{{example.code}}</td>\n      <td>{{example.result}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./app/components/fsarray-example/fsarray-example.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsarray_service_1 = __webpack_require__("../src/services/fsarray.service.ts");
var FsArrayExampleComponent = (function () {
    function FsArrayExampleComponent(FsArray) {
        this.FsArray = FsArray;
        this.array = [{ "id": 1, "name": "Will" }, { "id": 2, "name": "Bob" }, { "id": 3, "name": "Tom" }];
        this.examples = [];
        var array = this.array;
        this.examples = [{ name: 'Indexed array',
                code: "FsArray.index(array,'id')",
                result: FsArray.index(array.slice(), 'id') },
            { name: 'IndexOf Name==Tom (Property)',
                code: "FsArray.indexOf(array,{ name: 'Tom'})",
                result: FsArray.indexOf(array.slice().slice(), function (value) { return value.name == 'Tom'; }) },
            { name: 'Filtered By Property',
                code: "FsArray.filter(array,{ name: 'Will' })",
                result: FsArray.filter(array, { name: 'Will' }) },
            { name: 'Filtered By Function',
                code: "FsArray.filter(array,function(value) { return value.name=='Will'; })",
                result: FsArray.filter(array.slice(), function (value) { return value.name == 'Will'; }) },
            { name: 'Sort By Property',
                code: "FsArray.sort(array,'name')",
                result: FsArray.sort(array.slice(), 'name') },
            { name: 'Sort By Function',
                code: "FsArray.sort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })",
                result: FsArray.sort(array.slice(), function (a, b) { if (a.name > b.id) {
                    return 1;
                } if (a.name < b.id) {
                    return -1;
                } return 0; }) },
            { name: 'Reverse Sort',
                code: "FsArray.rsort(array,'name')",
                result: FsArray.rsort(array.slice(), 'name') },
            { name: 'Removed by Property',
                code: "FsArray.remove(array,{ name: 'Tom' })",
                result: FsArray.remove(array.slice(), { name: 'Tom' }) },
            { name: 'Removed By Function',
                code: "FsArray.remove(array,function(value) { return value.name=='Will'; })",
                result: FsArray.remove(array.slice(), function (value) { return value.name == 'Will'; }) },
            { name: 'List',
                code: "FsArray.list(array,'name')",
                result: FsArray.list(array.slice(), 'name') },
            { name: 'List Indexed',
                code: "FsArray.list(array,'name','id')",
                result: FsArray.list(array.slice(), 'name', 'id') },
            { name: 'Name Value',
                code: "FsArray.nameValue(array,'name','id')",
                result: FsArray.nameValue(array.slice(), 'name', 'id') },
            { name: 'Name Value Function',
                code: "FsArray.nameValue(array,function(item) { return item.name; },function(item) { return item.id; })",
                result: FsArray.nameValue(array.slice(), function (item) { return item.name; }, function (item) { return item.id; }) },
            { name: 'In Array',
                code: "FsArray.inArray([2,10],[2,4,6,8])",
                result: FsArray.inArray([2, 10], [2, 4, 6, 8]) },
            { name: 'In Array',
                code: "FsArray.inArray(2,[2,4,6,8])",
                result: FsArray.inArray(2, [2, 4, 6, 8]) }
        ];
        this.examples.forEach(function (example) {
            example.result = JSON.stringify(example.result);
        });
    }
    FsArrayExampleComponent = __decorate([
        core_1.Component({
            selector: 'fsarray-example',
            template: __webpack_require__("./app/components/fsarray-example/fsarray-example.component.html"),
            styles: [__webpack_require__("./app/components/fsarray-example/fsarray-example.component.css")]
        }),
        __metadata("design:paramtypes", [fsarray_service_1.FsArray])
    ], FsArrayExampleComponent);
    return FsArrayExampleComponent;
}());
exports.FsArrayExampleComponent = FsArrayExampleComponent;


/***/ }),

/***/ "./app/components/fsmath-example/fsmath-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsmath-example/fsmath-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/fsmath-example/fsmath-example.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Description</th>\n      <th>Code</th>\n      <th>Result</th>\n    </tr>\n  </thead>\n  <tr *ngFor=\"let example of examples\">\n      <td>{{example.name}}</td>\n      <td>{{example.code}}</td>\n      <td>{{example.result}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./app/components/fsmath-example/fsmath-example.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsmath_service_1 = __webpack_require__("../src/services/fsmath.service.ts");
var FsMathExampleComponent = (function () {
    function FsMathExampleComponent(FsMath) {
        this.FsMath = FsMath;
        this.examples = [];
        this.examples = [{ name: 'Round',
                code: "FsMath.round(10.53,1)",
                result: FsMath.round(10.53, 1) }
        ];
        this.examples.forEach(function (example) {
            example.result = JSON.stringify(example.result);
        });
    }
    FsMathExampleComponent = __decorate([
        core_1.Component({
            selector: 'fsmath-example',
            template: __webpack_require__("./app/components/fsmath-example/fsmath-example.component.html"),
            styles: [__webpack_require__("./app/components/fsmath-example/fsmath-example.component.css")]
        }),
        __metadata("design:paramtypes", [fsmath_service_1.FsMath])
    ], FsMathExampleComponent);
    return FsMathExampleComponent;
}());
exports.FsMathExampleComponent = FsMathExampleComponent;


/***/ }),

/***/ "./app/components/fsutil-example/fsutil-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsutil-example/fsutil-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/fsutil-example/fsutil-example.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Description</th>\n      <th>Code</th>\n      <th>Result</th>\n    </tr>\n  </thead>\n  <tr *ngFor=\"let example of examples\">\n      <td>{{example.name}}</td>\n      <td>{{example.code}}</td>\n      <td>{{example.result}}</td>\n  </tr>\n</table>\n\n\n{{213|fsUtilGuid}}\n"

/***/ }),

/***/ "./app/components/fsutil-example/fsutil-example.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsutil_service_1 = __webpack_require__("../src/services/fsutil.service.ts");
var FsUtilExampleComponent = (function () {
    function FsUtilExampleComponent(FsUtil) {
        this.FsUtil = FsUtil;
        this.examples = [];
        this.examples = [{ name: 'GUID',
                code: "FsUtil.guid()",
                result: FsUtil.guid() },
            { name: 'UUID',
                code: "FsUtil.uuid()",
                result: FsUtil.uuid() },
            { name: 'Int',
                code: "FsUtil.int('123')",
                result: FsUtil.int('123') },
            { name: 'Float',
                code: "FsUtil.float('54.66')",
                result: FsUtil.float('54.66') },
            { name: 'String',
                code: "FsUtil.string(123)",
                result: FsUtil.string(123) },
            { name: 'Is Empty Array',
                code: "FsUtil.isEmpty([])",
                result: FsUtil.isEmpty([]) },
            { name: 'Is Array',
                code: "fsUtil.isArray([])",
                result: FsUtil.isArray([]) },
            { name: 'Is Object',
                code: "FsUtil.isObject({})",
                result: FsUtil.isObject({}) },
            { name: 'Is isNumeric',
                code: "FsUtil.isNumeric(123)",
                result: FsUtil.isNumeric(123) },
            { name: 'Is Int',
                code: "FsUtil.isInt(123)",
                result: FsUtil.isInt(123) }
        ];
        this.examples.forEach(function (example) {
            example.result = JSON.stringify(example.result);
        });
    }
    FsUtilExampleComponent = __decorate([
        core_1.Component({
            selector: 'fsutil-example',
            template: __webpack_require__("./app/components/fsutil-example/fsutil-example.component.html"),
            styles: [__webpack_require__("./app/components/fsutil-example/fsutil-example.component.css")]
        }),
        __metadata("design:paramtypes", [fsutil_service_1.FsUtil])
    ], FsUtilExampleComponent);
    return FsUtilExampleComponent;
}());
exports.FsUtilExampleComponent = FsUtilExampleComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var fsarray_example_component_1 = __webpack_require__("./app/components/fsarray-example/fsarray-example.component.ts");
var fsutil_example_component_1 = __webpack_require__("./app/components/fsutil-example/fsutil-example.component.ts");
var fsmath_example_component_1 = __webpack_require__("./app/components/fsmath-example/fsmath-example.component.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsCommonModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                fsarray_example_component_1.FsArrayExampleComponent,
                fsutil_example_component_1.FsUtilExampleComponent,
                fsmath_example_component_1.FsMathExampleComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map