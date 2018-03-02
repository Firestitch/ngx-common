import { Injectable } from '@angular/core';
@Injectable()
export class FsMath {

    /**
     * @deprecated use import { round } from @firestitch/common/math; instead
    */
    public round(number, precision): number {
        precision = precision || 0;
        let factor = Math.pow(10, precision);
        let tempNumber = number * factor;
        let roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}
