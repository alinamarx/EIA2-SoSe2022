let v: number = 1;
v = v + 1;
console.log(v);

const w: number = 1;
//w = w + 1;
console.log(w);

let a [] = [7, true, "Hallo"];
//console.log(a);
//console.log(a[0]);
//console.log(a[3]);

//a[4] = [101, 102];
//console.log(a[3]);
//console.log(a[5]);

let s = {"zahl": 7, "wahr": true, text: "Hallo"};
console.log(s);
console.log(s["zahl"]);
console.log(s.zahl);
//console.log(s.geburtstag);

s[4] = [101];
console.log(s);
console.log(s[4]);

interface Daten {
    Name: string;
    alter: number;
    geimpft: [ja: number]; //:boolean
}

let studenten: Daten [] = [];
studenten.push({Name: "Alina", alter: 18, geimpft: {1: true, 2: true, 3: true} });


function isDivisible (dividend: number, divisor: number): boolean {
    let result: boolean = (dividend / divisor == 0);
    return result;
}
console.log(isDivisible(4, 3));
console.log(isDivisible(4, 2));
isDivisible(10, 5);

let v1: number = 1;
let v2: number = v1;
v1 = 3;
console.log(v1, v2);

let v3: number [] = [1, 2, 3];
let v4: number [] = v3;
v3 = [3, 2, 1];
console.log(v3, v4);