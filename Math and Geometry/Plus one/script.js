"use strict";

console.log("plus one");

const digit = [4, 3, 2, 1];
const digit2 = [1, 2, 9];
const digit3 = [9];
const digit4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

const plusOne = function (digits) {
  let str = digits.reduce((acc, num) => (acc += num), "");
  str = BigInt(str);
  str++;
  str = [...str.toString()];
  return str.map(n => +n);
};

console.log("[4,3,2,1]= ", plusOne(digit));
console.log("########################################");
console.log("[1,2,9]= ", plusOne(digit2));
console.log("########################################");
console.log("[9]= ", plusOne(digit3));
console.log("########################################");
console.log("= ", plusOne(digit4));
