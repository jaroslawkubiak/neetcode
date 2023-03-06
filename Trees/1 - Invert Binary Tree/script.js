"use strict";

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

const root = [4, 2, 7, 1, 3, 6, 9, 1, 2, 3, 4, 5, 6, 7, 8];
// const root = [4, 2, 7, 1, 3, 6, 9];

var invertTree = function (root) {
  const invertRoot = [root[0]];
  let levelSize = 2;
  let lastIndex = 2;
  let nextIndex = 1;

  do {
    for (let i = lastIndex; i >= nextIndex; i--) {
      //   console.log(`root[${i}]=${root[i]}`);
      invertRoot.push(root[i]);
    }
    nextIndex += levelSize;
    levelSize *= 2;
    lastIndex += levelSize;
  } while (lastIndex < root.length);

  return invertRoot;
};

console.log(invertTree(root));
console.log(`Out: [4, 7, 2, 9, 6, 3, 1]`);
