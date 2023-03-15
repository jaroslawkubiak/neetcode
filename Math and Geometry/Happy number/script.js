"use strict";

console.log("happy");
let resultIsHappy = false;

const isHappy = function (n) {
  var happy = String(n)
    .split("")
    .map(n => Number(n) ** 2)
    .reduce((acc, num) => (acc = acc + num), 0);
  console.log(happy);
  if (happy === 1) {
    console.log("ide w true");
    resultIsHappy = true;
    return true;
  } else {
    console.log("ide w false");
    isHappy(happy);
  }
};

isHappy(2);
console.log("resultIsHappy=", resultIsHappy);
