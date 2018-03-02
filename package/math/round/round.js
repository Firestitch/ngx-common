export function round(inputNumber, precision) {
    precision = precision || 0;
    const factor = Math.pow(10, precision);
    const tempNumber = inputNumber * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}
//# sourceMappingURL=round.js.map