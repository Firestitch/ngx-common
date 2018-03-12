"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//# sourceMappingURL=fsmath.service.js.map