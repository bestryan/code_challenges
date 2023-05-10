// Day 29 8/May/23

// 67. Add Binary
var addBinary = function (a, b) {
  // buildin methods
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);

  let strA = a.split('').reverse().join('');
  let strB = b.split('').reverse().join('');
  let length = strA.length > strB.length ? strA.length : strB.length;

  let result = [];
  for (let i = 0; i < length; i++) {
    let num1 = Number(strA[i] || 0);
    let num2 = Number(strB[i] || 0);
    let sum = num1 + num2 + Number(result[i] || 0);
    if (sum >= 2) {
      result[i] = sum % 2;
      result.push(1);
    } else {
      result[i] = sum;
    }
  }
  return result.reverse().join('');
};

console.log(addBinary('101', '12'));

// Day 30 9/May/23

// 2635. Apply Transform Over Each Element in Array

var map = function (arr, fn) {
  // return arr.map(fn);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};

// 69. Sqrt(x) without buit-in function

var mySqrt = function (x) {
  let result = 1;
  let i = 1;

  while (result <= x) {
    i++;
    result = i * i;
  }
  return i - 1;
};

// Day 31 10/May/23

// 2634. Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i, arr);
    if (result) filterArray.push(arr[i]);
  }
  return filterArray;
};

// 6. Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s === null || numRows === 0) {
    return '';
  }
  if (numRows === 1) {
    return s;
  }

  let step = numRows * 2 - 2;
  let result = '';

  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += step) {
      result += s[j];

      let nextStep = j + step - 2 * i;
      if (i !== 0 && i !== numRows - 1 && nextStep < s.length) {
        result += s[nextStep];
      }
    }
  }
  return result;
};

// Day 32 11/May/23

// Day 33 12/May/23

// Day 34 13/May/23

// Day 35 14/May/23
