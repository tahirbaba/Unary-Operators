#! /usr/bin/env node
// Unary Operators (++) (--)
let a = 2;
let b = 4;
++a;
--b;
console.log(a + a); // Output : 6
console.log(a + a + a); // Output : 9
console.log(a + a + a - a); // Output : 6
console.log(b + b); // Output : 6
console.log(b + b - b); // Output : 3
console.log(b + b - b - b); // Output : 0
console.log(b + b - b - b + b); // Output : 3
let c = 5;
let d = 2;
let e;
// e = ++c + c++;
// console.log(e);  // Output : 12
// e = ++c + c++ + d
// console.log(e);  // Output : 14
// e = ++c + c++ + d + --d;
// console.log(e);  // Output : 15
e = ++c + c++ + d + --d + d;
console.log(e); // Output : 16
e = ++c + c++ + d + --d + d--;
console.log(e); // Output : 17
export {};
