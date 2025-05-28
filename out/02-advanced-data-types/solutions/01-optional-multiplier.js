"use strict";
function optionalMultiplier(param1, param2, param3) {
    let num1 = param1 != undefined ? Number(param1) : 1;
    let num2 = param2 != undefined ? Number(param2) : 1;
    let num3 = param3 != undefined ? Number(param3) : 1;
    return num1 * num2 * num3;
}
console.log(optionalMultiplier(undefined, 5, '10'));
//# sourceMappingURL=01-optional-multiplier.js.map