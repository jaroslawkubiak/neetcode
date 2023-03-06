const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const strs = ["", "", ""]; //[["","",""]]

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const mySort = function (myStr) {
  return myStr
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};
var groupAnagrams = function (strs) {
  const temp = new Map();

  for (let j = 0; j < strs.length; j++) {
    const tempArr = [];
    const convertString = mySort(strs[j]);

    for (let i = 0; i < strs.length; i++) {
      const matchingString = mySort(strs[i]);

      if (convertString === matchingString) tempArr.push(strs[i]);
      
    }
    temp.set(convertString, tempArr)

  }


  return [...temp.values()];
};

console.log(groupAnagrams(strs));

// TODO nie działa, test case przechodzi, ale submit już nie.



// var groupAnagrams = (words, map = new Map()) => {
//   if (!words.length) return [];

//   groupWords(words, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */

//   return [ ...map.values() ];/* Time O(N)               | Space O(N * K) */
// };

// var groupWords = (words, map) => {
//   for (const original of words) {/* Time O(N) */
//       const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
//       const values = map.get(sorted) || [];

//       values.push(original);           /*                    | Space O(N) */
//       map.set(sorted, values);         /*                    | Space O(N * K) */
//   }
// }

// const reorder = (str) => str
//   .split('')                         /* Time O(K)          | Space O(K) */
//   .sort((a, b) => a.localeCompare(b))/* Time O(K * log(K)) | Space O(1 || log(K)) */
//   .join('');                         /* Time O(K)          | Space O(K) */

// /**
// * Hash Map
// * Time O(N * K) | Space O(N * K)
// * https://leetcode.com/problems/group-anagrams/
// * @param {string[]} words
// * @return {string[][]}
// */
// var groupAnagrams = (words, map = new Map()) => {
//   if (!words.length) return [];

//   groupWords(words, map);    /* Time O(N * K) | Space O(N * K) */

//   return [ ...map.values() ];/* Time O(N)     | Space O(N * K) */
// }

// var groupWords = (words, map) => {
//   for (const original of words) {/* Time O(N) */
//       const hash = getHash(original); /* Time O(K) | Space O(1) */
//       const values = map.get(hash) || [];

//       values.push(original);          /*           | Space O(N) */
//       map.set(hash, values);          /*           | Space O(N * K) */
//   }
// }

// const getHash = (word) => {
//   const frequency = new Array(26).fill(0);

//   for (const char of word) {/* Time O(K) */
//       const charCode = getCode(char);/* Time O(1) | Space (1) */

//       frequency[charCode]++;         /*           | Space O(1) */
//   }

//   return buildHash(frequency)
// }

// const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

// const buildHash = (frequency) => frequency.toString();


