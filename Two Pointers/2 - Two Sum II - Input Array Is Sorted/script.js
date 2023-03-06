"use strict";

const numbers1 = [2, 7, 11, 15],
  target1 = 9;
const output1 = [1, 2];

const numbers2 = [2, 3, 4],
  target2 = 6;
const output2 = [1, 3];

const numbers3 = [-1, 0],
  target3 = -1;
const output3 = [1, 2];

const numbers4 = [-3, 3, 4, 90],
  target4 = 0;
const output4 = [1, 2];

const numbers5 = [5, 25, 75],
  target5 = 100;
const output5 = [2, 3];

const numbers6 = [
  12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136, 168,
  173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306, 314, 316, 321, 325,
  328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387, 394, 400, 404,
  414, 422, 422, 427, 430, 435, 457, 493, 506, 527, 531, 538, 541, 546, 568,
  583, 585, 587, 650, 652, 677, 691, 730, 737, 740, 751, 755, 764, 778, 783,
  785, 789, 794, 803, 809, 815, 847, 858, 863, 863, 874, 887, 896, 916, 920,
  926, 927, 930, 933, 957, 981, 997,
];

const target6 = 542;
const output6 = [24, 32];

var twoSum = function (numbers, target) {
  let [l, r] = [0, numbers.length - 1];
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    let isTarget = sum === target;
    if (isTarget) return [l + 1, r + 1];

    if (target > sum) l++;
    else r--;
  }
  return [-1, -1];
};

console.log(twoSum(numbers1, target1), "should be:", output1);
console.log(twoSum(numbers2, target2), "should be:", output2);
console.log(twoSum(numbers3, target3), "should be:", output3);
console.log(twoSum(numbers4, target4), "should be:", output4);
console.log(twoSum(numbers5, target5), "should be:", output5);
console.log(twoSum(numbers6, target6), "should be:", output6);
