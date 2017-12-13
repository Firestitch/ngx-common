import { Injectable } from '@angular/core';
@Injectable()
export class FsMath {

    public round(number, precision): number {
        precision = precision || 0;
        let factor = Math.pow(10, precision);
        let tempNumber = number * factor;
        let roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}
