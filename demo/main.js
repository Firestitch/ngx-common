webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsarray-example/fsarray-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-common/fsarray-example.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,oBAAA;EACA,0BAAA;EACA,YAAA;CACD;;AAED;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;CACD","file":"fsarray-example.component.css","sourcesContent":[".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsmath-example/fsmath-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-common/fsmath-example.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,oBAAA;EACA,0BAAA;EACA,YAAA;CACD;;AAED;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;CACD","file":"fsmath-example.component.css","sourcesContent":[".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/fsutil-example/fsutil-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-common/fsutil-example.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,oBAAA;EACA,0BAAA;EACA,YAAA;CACD;;AAED;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;CACD","file":"fsutil-example.component.css","sourcesContent":[".table {\n  border: 1px solid #ccc;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  width: 100%\n}\n\n.table td {\n  border: 1px solid #ccc;\n  padding: 5px 15px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/array/applyDepth/applyDepth.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function applyDepth(objects, parentProperty, idProperty, depthProperty) {
    if (idProperty === void 0) { idProperty = 'id'; }
    if (depthProperty === void 0) { depthProperty = 'depth'; }
    var keyed = {};
    objects.forEach(function (object) {
        if (!object[parentProperty])
            object[depthProperty] = 0;
        keyed[object[idProperty]] = object;
    });
    Object.keys(keyed).forEach(function (key) {
        Object.keys(keyed).forEach(function (key) {
            if (!keyed[key][depthProperty]) {
                if (keyed[key][parentProperty]) {
                    keyed[key][depthProperty] = keyed[keyed[key][parentProperty]][depthProperty] + 1;
                }
            }
        });
    });
    return keyed;
}
exports.applyDepth = applyDepth;


/***/ }),

/***/ "../src/array/applyDepth/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/applyDepth/applyDepth.ts"));


/***/ }),

/***/ "../src/array/compare/compare.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function compare(query, item) {
    var value = true;
    for (var key in query) {
        value = value && item[key] == query[key];
    }
    return value;
}
exports.compare = compare;


/***/ }),

/***/ "../src/array/compare/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/compare/compare.ts"));


/***/ }),

/***/ "../src/array/filter/filter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compare_1 = __webpack_require__("../src/array/compare/index.ts");
function filter(array, query) {
    if (typeof query !== 'function') {
        var queryObj_1 = query;
        query = function (item) {
            return compare_1.compare(queryObj_1, item);
        };
    }
    var isarray = Array.isArray(array);
    var list = isarray ? [] : {};
    if (isarray) {
        array.forEach(function (item, idx) {
            if (query(item)) {
                list.push(item);
            }
        });
    }
    else {
        Object.keys(array).forEach(function (key) {
            if (query(array[key])) {
                list[key] = array[key];
            }
        });
    }
    return list;
}
exports.filter = filter;


/***/ }),

/***/ "../src/array/filter/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/filter/filter.ts"));


/***/ }),

/***/ "../src/array/inArray/inArray.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function inArray(values, array) {
    if (!Array.isArray(values)) {
        values = [values];
    }
    for (var i = 0, len = values.length; i < len; i++) {
        if (array.indexOf(values[i]) >= 0) {
            return true;
        }
    }
    return false;
}
exports.inArray = inArray;


/***/ }),

/***/ "../src/array/inArray/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/inArray/inArray.ts"));


/***/ }),

/***/ "../src/array/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/applyDepth/index.ts"));
__export(__webpack_require__("../src/array/compare/index.ts"));
__export(__webpack_require__("../src/array/filter/index.ts"));
__export(__webpack_require__("../src/array/inArray/index.ts"));
__export(__webpack_require__("../src/array/index/index.ts"));
__export(__webpack_require__("../src/array/indexOf/index.ts"));
__export(__webpack_require__("../src/array/keyExists/index.ts"));
__export(__webpack_require__("../src/array/ksort/index.ts"));
__export(__webpack_require__("../src/array/length/index.ts"));
__export(__webpack_require__("../src/array/list/index.ts"));
__export(__webpack_require__("../src/array/nameValue/index.ts"));
__export(__webpack_require__("../src/array/remove/index.ts"));
__export(__webpack_require__("../src/array/rsort/index.ts"));
__export(__webpack_require__("../src/array/sort/index.ts"));


/***/ }),

/***/ "../src/array/index/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function index(array, property) {
    var list = {};
    array.forEach(function (item, idx) {
        list[item[property]] = item;
    });
    return list;
}
exports.index = index;


/***/ }),

/***/ "../src/array/indexOf/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/indexOf/indexOf.ts"));


/***/ }),

/***/ "../src/array/indexOf/indexOf.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compare_1 = __webpack_require__("../src/array/compare/index.ts");
function indexOf(array, query) {
    if (typeof query !== 'function') {
        var queryObj_1 = query;
        query = function (item) {
            return compare_1.compare(queryObj_1, item);
        };
    }
    for (var i = 0, len = array.length; i < len; i++) {
        if (query(array[i])) {
            return i;
        }
    }
    return -1;
}
exports.indexOf = indexOf;


/***/ }),

/***/ "../src/array/keyExists/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/keyExists/keyExists.ts"));


/***/ }),

/***/ "../src/array/keyExists/keyExists.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function keyExists(array, key) {
    return array.hasOwnProperty(key);
}
exports.keyExists = keyExists;


/***/ }),

/***/ "../src/array/ksort/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/ksort/ksort.ts"));


/***/ }),

/***/ "../src/array/ksort/ksort.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ksort(unordered) {
    Object.keys(unordered).sort().forEach(function (key) {
        var value = unordered[key];
        delete unordered[key];
        unordered[key] = value;
    });
}
exports.ksort = ksort;


/***/ }),

/***/ "../src/array/length/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/length/length.ts"));


/***/ }),

/***/ "../src/array/length/length.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function length(array) {
    return array.length;
}
exports.length = length;


/***/ }),

/***/ "../src/array/list/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/list/list.ts"));


/***/ }),

/***/ "../src/array/list/list.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function list(array, property, index) {
    if (index === void 0) { index = null; }
    var resultList = index ? {} : [];
    array.forEach(function (item, idx) {
        if (index) {
            resultList[item[index]] = item[property];
        }
        else {
            resultList.push(item[property]);
        }
    });
    return resultList;
}
exports.list = list;


/***/ }),

/***/ "../src/array/nameValue/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/nameValue/nameValue.ts"));


/***/ }),

/***/ "../src/array/nameValue/nameValue.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function nameValue(array, name, value) {
    var list = [];
    if (name || value) {
        var nameFn_1 = typeof name === 'function' ? name : function (item) {
            return item[name];
        };
        var valueFn_1 = typeof value === 'function' ? value : function (item) {
            return item[value];
        };
        array.forEach(function (item) {
            list.push({ name: nameFn_1(item), value: valueFn_1(item) });
        });
    }
    else {
        array.forEach(function (n, v) {
            list.push({ name: n, value: v });
        });
    }
    return list;
}
exports.nameValue = nameValue;


/***/ }),

/***/ "../src/array/remove/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/remove/remove.ts"));


/***/ }),

/***/ "../src/array/remove/remove.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var indexOf_1 = __webpack_require__("../src/array/indexOf/index.ts");
function remove(array, query) {
    var idx = indexOf_1.indexOf(array, query);
    if (idx >= 0) {
        return array.splice(idx, 1);
    }
    return idx;
}
exports.remove = remove;


/***/ }),

/***/ "../src/array/rsort/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/rsort/rsort.ts"));


/***/ }),

/***/ "../src/array/rsort/rsort.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sort_1 = __webpack_require__("../src/array/sort/index.ts");
function rsort(array, query) {
    return sort_1.sort(array, query, true);
}
exports.rsort = rsort;


/***/ }),

/***/ "../src/array/sort/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/array/sort/sort.ts"));


/***/ }),

/***/ "../src/array/sort/sort.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sort(array, query, reverse) {
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
}
exports.sort = sort;


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

/***/ "../src/math/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/math/round/index.ts"));


/***/ }),

/***/ "../src/math/round/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/math/round/round.ts"));


/***/ }),

/***/ "../src/math/round/round.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function round(inputNumber, precision) {
    precision = precision || 0;
    var factor = Math.pow(10, precision);
    var tempNumber = inputNumber * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}
exports.round = round;


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
    /**
     * @deprecated use import { nameValue } from @firestitch/common/array; instead
    */
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
    /**
     * @deprecated use import { remove } from @firestitch/common/array; instead
    */
    FsArray.prototype.remove = function (array, query) {
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
        return this.sort(array, query, true);
    };
    /**
     * @deprecated use import { list } from @firestitch/common/array; instead
    */
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
    /**
     * @deprecated use import { applyDepth } from @firestitch/common/array; instead
    */
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
    /**
     * @deprecated use import { inArray } from @firestitch/common/array; instead
    */
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
    /**
     * @deprecated use import { keyExists } from @firestitch/common/array; instead
    */
    FsArray.prototype.keyExists = function (array, key) {
        return array.hasOwnProperty(key);
    };
    /**
     * @deprecated use import { length } from @firestitch/common/array; instead
    */
    FsArray.prototype.length = function (array) {
        return array.length;
    };
    /**
     * @deprecated use import { ksort } from @firestitch/common/array; instead
    */
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
    /**
     * @deprecated use import { round } from @firestitch/common/math; instead
    */
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
var util_1 = __webpack_require__("../src/util/index.ts");
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

/***/ "../src/util/boolean/boolean.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("../node_modules/lodash/lodash.js");
function boolean(value) {
    return lodash_1.toString(value).toLowerCase() !== 'false' && !!value;
}
exports.boolean = boolean;


/***/ }),

/***/ "../src/util/boolean/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/boolean/boolean.ts"));


/***/ }),

/***/ "../src/util/debounce/debounce.ts":
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

/***/ "../src/util/debounce/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/debounce/debounce.ts"));


/***/ }),

/***/ "../src/util/guid/guid.ts":
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

/***/ "../src/util/guid/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/guid/guid.ts"));


/***/ }),

/***/ "../src/util/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/boolean/index.ts"));
__export(__webpack_require__("../src/util/debounce/index.ts"));
__export(__webpack_require__("../src/util/guid/index.ts"));
__export(__webpack_require__("../src/util/keys/index.ts"));
__export(__webpack_require__("../src/util/length/index.ts"));
__export(__webpack_require__("../src/util/resolve/index.ts"));
__export(__webpack_require__("../src/util/stringify/index.ts"));
__export(__webpack_require__("../src/util/uuid/index.ts"));
__export(__webpack_require__("../src/util/value/index.ts"));
__export(__webpack_require__("../src/util/isClass/index.ts"));
__export(__webpack_require__("../src/util/isNumeric/index.ts"));
__export(__webpack_require__("../src/util/isEmpty/index.ts"));
__export(__webpack_require__("../src/util/throttle/index.ts"));


/***/ }),

/***/ "../src/util/isClass/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/isClass/isClass.ts"));


/***/ }),

/***/ "../src/util/isClass/isClass.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("../node_modules/util/util.js");
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

/***/ "../src/util/isEmpty/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/isEmpty/isEmpty.ts"));


/***/ }),

/***/ "../src/util/isEmpty/isEmpty.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("../node_modules/lodash/lodash.js");
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

/***/ "../src/util/isNumeric/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/isNumeric/isNumeric.ts"));


/***/ }),

/***/ "../src/util/isNumeric/isNumeric.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("../node_modules/lodash/lodash.js");
function isNumeric(value) {
    var str = lodash_1.toString(value);
    return str.length && !!str.match(/^-?\d*\.?\d*$/);
}
exports.isNumeric = isNumeric;


/***/ }),

/***/ "../src/util/keys/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/keys/keys.ts"));


/***/ }),

/***/ "../src/util/keys/keys.ts":
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

/***/ "../src/util/length/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/length/length.ts"));


/***/ }),

/***/ "../src/util/length/length.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__("../node_modules/lodash/lodash.js");
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

/***/ "../src/util/resolve/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/resolve/resolve.ts"));


/***/ }),

/***/ "../src/util/resolve/resolve.ts":
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

/***/ "../src/util/stringify/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/stringify/stringify.ts"));


/***/ }),

/***/ "../src/util/stringify/stringify.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
exports.stringify = stringify;


/***/ }),

/***/ "../src/util/throttle/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/throttle/throttle.ts"));


/***/ }),

/***/ "../src/util/throttle/throttle.ts":
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

/***/ "../src/util/uuid/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/uuid/uuid.ts"));


/***/ }),

/***/ "../src/util/uuid/uuid.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__("../src/util/guid/index.ts");
function uuid() {
    return guid_1.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
}
exports.uuid = uuid;


/***/ }),

/***/ "../src/util/value/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/util/value/value.ts"));


/***/ }),

/***/ "../src/util/value/value.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("../node_modules/util/util.js");
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
var array_1 = __webpack_require__("../src/array/index.ts");
var FsArrayExampleComponent = (function () {
    function FsArrayExampleComponent() {
        this.array = [{ id: 1, name: 'Will' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Tom' }];
        this.examples = [];
        var array = this.array;
        this.examples = [
            {
                name: 'Indexed array',
                deprecatedCode: "FsArray.index(array,'id')",
                code: "\n          import { index } from '@firestitch/common/array'; \n\n          index(array,'id')\n        ",
                result: array_1.index(array.slice(), 'id')
            },
            {
                name: 'IndexOf Name==Tom (Property)',
                deprecatedCode: "FsArray.indexOf(array,{ name: 'Tom'})",
                code: "\n          import { indexOf } from '@firestitch/common/array'; \n\n          indexOf(array,{ name: 'Tom'})\n        ",
                result: array_1.indexOf(array.slice(), function (value) {
                    return value.name == 'Tom';
                })
            },
            {
                name: 'Filtered By Property',
                deprecatedCode: "FsArray.filter(array,{ name: 'Will' })",
                code: "\n          import { filter } from '@firestitch/common/array'; \n\n          filter(array,{ name: 'Will' })\n        ",
                result: array_1.filter(array.slice(), { name: 'Will' })
            },
            {
                name: 'Filtered By Function',
                deprecatedCode: "FsArray.filter(array,function(value) { return value.name=='Will'; })",
                code: "\n          import { filter } from '@firestitch/common/array'; \n\n          filter(array,function(value) { return value.name=='Will'; })\n        ",
                result: array_1.filter(array.slice(), function (value) {
                    return value.name == 'Will';
                })
            },
            {
                name: 'Sort By Property',
                deprecatedCode: "FsArray.sort(array,'name')",
                code: "\n          import { sort } from '@firestitch/common/array'; \n\n          sort(array,'name')\n        ",
                result: array_1.sort(array.slice(), 'name')
            },
            {
                name: 'Sort By Function',
                deprecatedCode: "FsArray.sort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })",
                code: "\n          import { sort } from '@firestitch/common/array'; \n\n          sort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })\n        ",
                result: array_1.sort(array.slice(), function (a, b) {
                    if (a.name > b.id) {
                        return 1;
                    }
                    if (a.name < b.id) {
                        return -1;
                    }
                    return 0;
                })
            },
            {
                name: 'Reverse Sort',
                deprecatedCode: "FsArray.rsort(array,'name')",
                code: "\n          import { rsort } from '@firestitch/common/array'; \n\n          rsort(array,'name')\n        ",
                result: array_1.rsort(array.slice(), 'name')
            },
            {
                name: 'Removed by Property',
                deprecatedCode: "FsArray.remove(array,{ name: 'Tom' })",
                code: "\n          import { remove } from '@firestitch/common/array'; \n\n          remove(array,{ name: 'Tom' })\n        ",
                result: array_1.remove(array.slice(), { name: 'Tom' })
            },
            {
                name: 'Removed By Function',
                deprecatedCode: "FsArray.remove(array,function(value) { return value.name=='Will'; })",
                code: "\n          import { remove } from '@firestitch/common/array'; \n\n          remove(array,function(value) { return value.name=='Will'; })\n        ",
                result: array_1.remove(array.slice(), function (value) {
                    return value.name == 'Will';
                })
            },
            {
                name: 'List',
                deprecatedCode: "FsArray.list(array,'name')",
                code: "\n          import { list } from '@firestitch/common/array'; \n\n          list(array,'name')\n        ",
                result: array_1.list(array.slice(), 'name')
            },
            {
                name: 'List Indexed',
                deprecatedCode: "FsArray.list(array,'name','id')",
                code: "\n          import { list } from '@firestitch/common/array'; \n\n          list(array,'name','id')\n        ",
                result: array_1.list(array.slice(), 'name', 'id')
            },
            {
                name: 'Name Value',
                deprecatedCode: "FsArray.nameValue(array,'name','id')",
                code: "\n          import { nameValue } from '@firestitch/common/array'; \n\n          nameValue(array,'name','id')\n        ",
                result: array_1.nameValue(array.slice(), 'name', 'id')
            },
            {
                name: 'Name Value Function',
                deprecatedCode: "FsArray.nameValue(array,function(item) { return item.name; },function(item) { return item.id; })",
                code: "\n          import { nameValue } from '@firestitch/common/array'; \n\n          nameValue(array,function(item) { return item.name; },function(item) { return item.id; })\n        ",
                result: array_1.nameValue(array.slice(), function (item) {
                    return item.name;
                }, function (item) {
                    return item.id;
                })
            },
            {
                name: 'In Array',
                deprecatedCode: "FsArray.inArray([2,10],[2,4,6,8])",
                code: "\n          import { inArray } from '@firestitch/common/array'; \n\n          inArray([2,10],[2,4,6,8])\n        ",
                result: array_1.inArray([2, 10], [2, 4, 6, 8])
            },
            {
                name: 'In Array',
                deprecatedCode: "FsArray.inArray(2,[2,4,6,8])",
                code: "\n          import { inArray } from '@firestitch/common/array'; \n\n          inArray(2,[2,4,6,8])\n        ",
                result: array_1.inArray(2, [2, 4, 6, 8])
            }
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
        __metadata("design:paramtypes", [])
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

module.exports = "<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Description</th>\n    <th>Deprecated Code</th>\n    <th>Code</th>\n    <th>Result</th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let example of examples\">\n    <td>{{example.name}}</td>\n    <td>{{example.deprecatedCode}}</td>\n    <td>{{example.code}}</td>\n    <td>{{example.result}}</td>\n  </tr>\n</table>\n"

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
var math_1 = __webpack_require__("../src/math/index.ts");
var FsMathExampleComponent = (function () {
    function FsMathExampleComponent() {
        this.examples = [];
        this.examples = [
            {
                name: 'Round',
                deprecatedCode: 'FsMath.round(10.53,1)',
                code: "\n          import { round } from '@firestitch/common/math'; \n\n          round(10.53, 1)\n        ",
                result: math_1.round(10.53, 1)
            }
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
        __metadata("design:paramtypes", [])
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

module.exports = "<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Description</th>\n    <th>Deprecated Code</th>\n    <th>Code</th>\n    <th>Result</th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let example of examples\">\n    <td>{{example.name}}</td>\n    <td>{{example.deprecatedCode}}</td>\n    <td>{{example.code}}</td>\n    <td>{{example.result}}</td>\n  </tr>\n</table>\n"

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
var util_1 = __webpack_require__("../src/util/index.ts");
var lodash_1 = __webpack_require__("../node_modules/lodash/lodash.js");
var FsUtilExampleComponent = (function () {
    function FsUtilExampleComponent() {
        this.examples = [];
        this.examples = [
            {
                name: 'GUID',
                deprecatedCode: 'FsUtil.guid()',
                code: "\n          import { guid } from '@firestitch/common/util'; \n\n          guid()\n        ",
                result: util_1.guid()
            },
            {
                name: 'UUID',
                deprecatedCode: 'FsUtil.uuid()',
                code: "\n          import { uuid } from '@firestitch/common/util'; \n\n          uuid()\n        ",
                result: util_1.uuid()
            },
            {
                name: 'Is Empty Array',
                deprecatedCode: 'FsUtil.isEmpty([])',
                code: "\n          import { isEmpty } from '@firestitch/common/util'; \n\n          isEmpty([])\n        ",
                result: util_1.isEmpty([])
            },
            {
                name: 'Is Numeric',
                deprecatedCode: 'FsUtil.isNumeric(123)',
                code: "\n          import { isNumeric } from '@firestitch/common/util'; \n\n          isNumeric(123)\n        ",
                result: util_1.isNumeric(123)
            },
            {
                name: 'Is Class',
                deprecatedCode: 'FsUtil.isClass(class)',
                code: "\n          import { isClass } from '@firestitch/common/util'; \n\n          isClass(class)\n        "
            },
            {
                name: 'Boolean',
                deprecatedCode: 'FsUtil.boolean(123)',
                code: "\n          import { boolean } from '@firestitch/common/util'; \n\n          boolean('test')\n        ",
                result: util_1.boolean('test')
            },
            {
                name: 'Debounce',
                deprecatedCode: 'FsUtil.debounce(func, wait, immediate)',
                code: "\n          import { debounce } from '@firestitch/common/util'; \n\n          boolean(func, wait, immediate)\n        "
            },
            {
                name: 'Length for Array or Object keys',
                deprecatedCode: 'FsUtil.length({a: 1, b: 2})',
                code: "\n          import { length } from '@firestitch/common/util'; \n\n          length({a: 1, b: 2})\n        ",
                result: util_1.length({ a: 1, b: 2 })
            },
            {
                name: 'Resolve for Promises',
                deprecatedCode: 'FsUtil.resolve(promise, defaults)',
                code: "\n          import { resolve } from '@firestitch/common/util'; \n\n          resolve(promise, defaults)\n        "
            },
            {
                name: 'JSON stringify',
                deprecatedCode: 'FsUtil.stringify(json)',
                code: "\n          import { stringify } from '@firestitch/common/util'; \n\n          stringify(json)\n        "
            },
            {
                name: 'Throttle for functions',
                deprecatedCode: 'FsUtil.throttle(func, wait)',
                code: "\n          import { throttle } from '@firestitch/common/util'; \n\n          throttle(func, wait)\n        "
            },
            {
                name: 'Get value from object or default',
                deprecatedCode: 'FsUtil.value(object, key, def)',
                code: "\n          import { value } from '@firestitch/common/util'; \n\n          value(object, key, def)\n        "
            },
            {
                name: 'Int',
                deprecatedCode: 'FsUtil.int(\'123\')',
                code: "\n          import { toInteger } from 'lodash'; \n\n          toInteger('123')\n        ",
                result: lodash_1.toInteger('123')
            },
            {
                name: 'Float',
                deprecatedCode: 'FsUtil.float(\'54.66\')',
                code: "\n          import { toFinite } from 'lodash'; \n\n          toFinite('54.66')\n        ",
                result: lodash_1.toFinite('54.66')
            },
            {
                name: 'String',
                deprecatedCode: 'FsUtil.string(123)',
                code: "\n          import { toString } from 'lodash'; \n\n          toString(123)\n        ",
                result: lodash_1.toString(123)
            },
            {
                name: 'Is Array',
                deprecatedCode: 'fsUtil.isArray([])',
                code: "\n          import { isArray } from 'lodash'; \n\n          isArray([])\n        ",
                result: lodash_1.isArray([])
            },
            {
                name: 'Is Object',
                deprecatedCode: 'FsUtil.isObject({})',
                code: "\n          import { isObject } from 'lodash'; \n\n          isObject({})\n        ",
                result: lodash_1.isObject({})
            },
            {
                name: 'Is Array Like Object',
                deprecatedCode: 'FsUtil.isObject({})',
                code: "\n          import { isArrayLikeObject } from 'lodash'; \n\n          isArrayLikeObject([])\n        ",
                result: lodash_1.isArrayLikeObject([])
            },
            {
                name: 'Is Int',
                deprecatedCode: 'FsUtil.isInt(123)',
                code: "\n          import { isInteger } from 'lodash'; \n\n          isInteger(123)\n        ",
                result: lodash_1.isInteger(123)
            }
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
        __metadata("design:paramtypes", [])
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