"use strict";

const nums1 = [7, 2, 7];
const nums2 = [4, 1, 2, 1, 2]; //Output: 4
const nums3 = [1]; //Output: 1

const singleNumber = function (nums) {
  const obj = {};
  nums.forEach(n => {
    if (obj.hasOwnProperty(n)) {
      obj[n] = obj[n] + 1;
    } else obj[n] = 1;
  });

  const arr = Object.entries(obj);
  const filtered = arr.filter(([key, value]) => {
    return value === 1;
  });
  const temp = filtered[0];
  return temp[0];
};

console.log("result 1=", singleNumber(nums1));
console.log("result 2=", singleNumber(nums2));
console.log("result 3=", singleNumber(nums3));
