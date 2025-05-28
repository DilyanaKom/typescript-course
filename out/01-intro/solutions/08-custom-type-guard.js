"use strict";
function isNonEmptyStingArray(arg) {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string');
}
let arr = ['test', 'test'];
if (isNonEmptyStingArray(arr)) {
    console.log(arr.length);
}
//# sourceMappingURL=08-custom-type-guard.js.map