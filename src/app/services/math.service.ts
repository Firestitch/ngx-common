import { Injectable } from '@angular/core';

@Injectable()
export class FsMath {

    /**
     * @deprecated use _.round() instead {@link https://lodash.com/docs/4.17.5#round}
    */
    public round(number, precision): number {
        console.warn('@deprecated use _.round() instead {@link https://lodash.com/docs/4.17.5#round}');
        precision = precision || 0;
        let factor = Math.pow(10, precision);
        let tempNumber = number * factor;
        let roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}
