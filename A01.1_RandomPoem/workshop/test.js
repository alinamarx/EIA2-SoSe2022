var v = 1;
v = v + 1;
console.log(v);
var w = 1;
//w = w + 1;
console.log(w);
var a, _a = [7, true, "Hallo"];
//console.log(a);
//console.log(a[0]);
//console.log(a[3]);
//a[4] = [101, 102];
//console.log(a[3]);
//console.log(a[5]);
var s = { "zahl": 7, "wahr": true, text: "Hallo" };
console.log(s);
console.log(s["zahl"]);
console.log(s.zahl);
//console.log(s.geburtstag);
s[4] = [101];
console.log(s);
console.log(s[4]);
var studenten = [];
studenten.push({ Name: "Alina", alter: 18, geimpft: { 1: true, 2: true, 3: true } });
function isDivisible(dividend, divisor) {
    var result = (dividend / divisor == 0);
    return result;
}
console.log(isDivisible(4, 3));
console.log(isDivisible(4, 2));
isDivisible(10, 5);
var v1 = 1;
var v2 = v1;
v1 = 3;
console.log(v1, v2);
var v3 = [1, 2, 3];
var v4 = v3;
v3 = [3, 2, 1];
console.log(v3, v4);
//# sourceMappingURL=test.js.map