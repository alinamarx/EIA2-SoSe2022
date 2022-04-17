"use strict";
let v = 1;
v = v + 1;
console.log(v);
const w = 1;
//w = w + 1;
console.log(w);
let studenten = [];
//studenten.push({Name: "Alina", alter: 18, geimpft: {1: true, 2: true, 3: true} });
function isDivisible(dividend, divisor) {
    let result = (dividend / divisor == 0);
    return result;
}
console.log(isDivisible(4, 3));
console.log(isDivisible(4, 2));
isDivisible(10, 5);
let v1 = 1;
let v2 = v1;
v1 = 3;
console.log(v1, v2);
let v3 = [1, 2, 3];
let v4 = v3;
v3 = [3, 2, 1];
console.log(v3, v4);
//# sourceMappingURL=test.js.map