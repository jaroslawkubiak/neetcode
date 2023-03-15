"use strict";
// const list1 = [], list2 = [0];
const list1 = [1, 2, 4],
  list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]

const mergeTwoLists = function (list1, list2) {
  // const arr = [...list1, ...list2];
  let arr = [];
  for (let i = 0; i < list1.length; i++) arr.push(list1[i]);
  for (let i = 0; i < list2.length; i++) arr.push(list2[i]);

  // console.log(arr);
  return arr.sort((a, b) => a - b);
};

// console.log(mergeTwoLists(list1, list2));
mergeTwoLists(list1, list2);
