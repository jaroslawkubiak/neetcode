"use strict";
// const arr = [1, 1];
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let [left, right, max] = [0, height.length - 1, 0];
  while (left < right) {
    if (height[left] > height[right]) {
      max = Math.max(max, height[right] * (right - left));
      right--;
    } else {
      max = Math.max(max, height[left] * (right - left));

      left++;
    }
  }

  return max;
};

const water = maxArea(arr);
console.log("water=", water);
