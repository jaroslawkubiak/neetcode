"use strict";
const nums = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

var trap = function (height) {
  const maxLeft = [];
  const maxRight = [];
  const min_value = [];
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    let maxL = 0;
    let maxR = 0;

    // according to neetcode this code don't work properly - it take too much time
    // so dooing 2x for loop is better than using slice method
    maxL = height.slice(0, i);
    maxR = height.slice(i + 1, height.length);

    if (maxL.length) {
      maxL = maxL.max();
      maxLeft.push(maxL);
    } else maxLeft.push(0);

    if (maxR.length) {
      maxR = maxR.max();
      maxRight.push(maxR);
    } else maxRight.push(0);

    min_value.push(Math.min(maxLeft[i], maxRight[i]));
    if (min_value[i] - height[i] > 0) res += min_value[i] - height[i];
  }
  return res;
};

console.log(trap(nums));
