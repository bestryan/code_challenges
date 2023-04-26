// Day 8 17/Apr/23

/** You Can't Code Under Pressure #1
Code as fast as you can! You need to double the integer and return it. */
function doubleInteger(i) {
  return i * 2;
}

/** Highest Scoring Word
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

function high(x) {
  let num = 'abcdefghijklmnopqrstuvwxyz';
  let highestNumber = 0;
  let highestword = '';

  let words = x.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let wordCounter = 0;
    word.split('').forEach((letter) => {
      wordCounter += num.indexOf(letter) + 1;
    });
    if (wordCounter > highestNumber) {
      highestNumber = wordCounter;
      highestword = word;
    }
  }
  return highestword;
}

console.log(high('a ab abc take me to semynak'));
console.log(high('aa b'));

// Day 9 18/Apr/23
/** 
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
var twoSum = function (nums, target) {
  let index = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index.push(i);
        index.push(j);
      }
    }
  }
  return index;
};

console.log(twoSum([3, 2, 4], 6));

/**
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
 */
var containsDuplicate = function (nums) {
  let num = nums.sort();
  for (let i = 0; i < num.length; i++) {
    if (num[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// Day 10 19/Apr/23
/**
121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/
var maxProfit = function (prices) {
  let maxProfits = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const currentProfit = currentPrice - minPrice;
    if (currentProfit > maxProfits) {
      maxProfits = currentProfit;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }
  return maxProfits;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 3, 3, 1]));

// Day 11 20/Apr/23
/**
9. Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */
var isPalindrome = function (x) {
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(123521));

// Day 12 21/Apr/23
/** 
 * 238.Product of Array Except Self 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation. 
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
var productExceptSelf = function (nums) {
  let len = nums.length;
  const leftProducts = new Array(len).fill(0);
  leftProducts[0] = 1;

  const rightProducts = new Array(len).fill(0);
  rightProducts[rightProducts.length - 1] = 1;

  let result = [];

  for (let i = 1; i < len; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }
  for (let i = len - 2; i >= 0; i--) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }

  for (let i = 0; i < len; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
};

console.log(productExceptSelf([2, 2, 3, 4, 2]));

// Day 13 22/Apr/23

var distanceBetweenBusStops = function (distance, start, destination) {
  const totolDistance = distance.reduce((a, b) => a + b, 0);
  let clockwise = 0;
  let startPoint = Math.min(start, destination);
  let endPoint = Math.max(start, destination);

  for (i = startPoint; i < endPoint; i++) {
    clockwise += distance[i];
  }
  let counterclockwise = totolDistance - clockwise;
  return Math.min(counterclockwise, clockwise);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));

var isPalindrome = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, '');
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));

// Day 14 23/Apr/23
// Binary Search
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// binary solution
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    }
    if (nums[midIndex] < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 3));
