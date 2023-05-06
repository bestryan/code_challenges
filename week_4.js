// Day 22 1/May/23
// 14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let output = '';
  const fristWord = strs[0];
  for (let i = 0; i < fristWord.length; i++) {
    const c1 = fristWord[i];
    let match = true;
    for (let j = 1; j < strs.length; j++) {
      const word = strs[j];
      const c2 = word[i];
      if (c1 !== c2) {
        match = false;
        break;
      }
    }
    if (match) {
      output = output + c1;
    } else {
      break;
    }
  }
  return output;
};

// solution 2
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  for (let i = 0; i <= strs[0].length; i++) {
    if (!strs.every((string) => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

// Day 23 2/May/23
// 58. Length of Last Word

var lengthOfLastWord = function (s) {
  let string = s.trim().split(' ');

  let word = string[string.length - 1];

  return word.length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));

// Day 24 3/May/23
// 66. Plus One

var plusOne = function (digits) {
  let num = BigInt(digits.join('')) + 1n;
  num = num.toString();

  return [...num];
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));

// Day 25 4/May/23
// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  return count + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Day 26 5/May/23
// 27. Remove Element

var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// Day 26 6/May/23

// 28. Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));

// Day 28 7/May/23
