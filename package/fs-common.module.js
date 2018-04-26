"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var fsarray_service_1 = require("./services/fsarray.service");
var fsmath_service_1 = require("./services/fsmath.service");
var fsutil_service_1 = require("./services/fsutil.service");
var fsvaildate_service_1 = require("./services/fsvaildate.service");
var fsutil_pipe_1 = require("./pipes/fsutil.pipe");
var format_1 = require("./format");
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
//# sourceMappingURL=fs-common.module.js.map