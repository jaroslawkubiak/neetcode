"use strict";

const nums = [-1, 0, 1, 2, -1, -4];
// [[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
  const res = [];
  if (nums.length < 3) return [];
  for (let i = 0; i < nums.length - 2; i++)
    for (let j = 1; j < nums.length - 1; j++)
      for (let k = 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp = temp.sort((a, b) => a - b);
          console.log(temp);
          res.push(temp);
        }
      }
  return res;
};

console.log(threeSum(nums));
