const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const nums = [100,4,200,1,3,2];
// const nums = [];

// const nums = [1, 2, 0, 1]; //3

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const temp = nums.sort(function (a, b) {
    return a - b;
  });

  console.log(temp);
  let max = 1;
  let licz = 1;
  for (let i = 0; i < temp.length; i++) {
    // debugger;
    const curr = temp[i];
    const next = temp[i + 1];
    if (curr - next === -1) {
      licz++;
    } else {
      if (max < licz) max = licz;
      licz = 1;
    }
  }
  return max;
};

console.log(longestConsecutive(nums));
