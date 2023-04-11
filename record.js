// Day 1

// Roman Numerals Decoder - Medium
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// Example: solution('XXI'); // should return 21

const romanToNum = (str) => {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'C' && str[i + 1] === 'M') {
      number += 900;
      i++;
    } else if (str[i] === 'C' && str[i + 1] === 'D') {
      number += 400;
      i++;
    } else if (str[i] === 'X' && str[i + 1] === 'C') {
      number += 90;
      i++;
    } else if (str[i] === 'X' && str[i + 1] === 'L') {
      number += 40;
      i++;
    } else if (str[i] === 'I' && str[i + 1] === 'X') {
      number += 9;
      i++;
    } else if (str[i] === 'I' && str[i + 1] === 'V') {
      number += 4;
      i++;
    } else {
      number += roman[str[i]];
    }
  }
  return number;
};

console.log(romanToNum('MDCLXVI'));
console.log(romanToNum('XXI'));

// better solution from other coder
// str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, str) => accum + roman[str], 0);

// below is opposite solution
const convertToRoman = (num) => {
  let romantoNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNum = '';
  for (var key in romantoNum) {
    //key value pair
    //console.log(key);
    //console.log(romantoNum[key]);

    while (num >= romantoNum[key]) {
      romanNum += key;
      num -= romantoNum[key];
    }
  }
  return romanNum;
};
console.log(convertToRoman(2023));
console.log(convertToRoman(1666));

//Function 1 - hello world - Easy
//DESCRIPTION:
//Make a simple function called greet that returns the most-famous "hello world!".
const greet = () => {
  return 'hello world';
};
