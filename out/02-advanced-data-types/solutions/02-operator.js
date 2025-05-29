"use strict";
function operator(param, operator, operand) {
    if (operator === 'Index' && typeof param !== 'number') {
        return param[operand];
    }
    ;
    if (operator === 'Length' && typeof param !== 'number') {
        return param.length % operand;
    }
    ;
    if (operator === 'Add' && typeof !Array.isArray(param)) {
        return Number(param) + operand;
    }
}
;
// console.log(operator(['First', 'Second', 'Third'], 'Index',1));
console.log(operator('string', 'Index', 1));
//# sourceMappingURL=02-operator.js.map