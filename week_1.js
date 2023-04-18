// Day 1

/** Roman Numerals Decoder - M
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
Example: solution('XXI'); // should return 21 */

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

/** Function 1 - hello world - E
DESCRIPTION:
Make a simple function called greet that returns the most-famous "hello world!". */
const greet = () => {
  return 'hello world';
};

// Day 2

/** Count by X - E
DESCRIPTION:
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).
Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));

/** Convert a Boolean to a String - E
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given. */
function booleanToString(b) {
  //your code here
  return b.toString();
}

/** Valid Phone Number - E
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) */

function validPhoneNumber(phoneNumber) {
  return phoneNumber.match(/^\(\d{3}\)\s{1}\d{3}\-{1}\d{4}$/g) ? true : false;
}

// Day 3

/** Take a Ten Minutes Walk - E
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */
function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      ns += 1;
    } else if (walk[i] === 's') {
      ns -= 1;
    } else if (walk[i] === 'w') {
      ew += 1;
    } else if (walk[i] === 'e') {
      ew -= 1;
    }
  }
  if (walk.length === 10 && (ns === 0) & (ew === 0)) {
    return true;
  } else {
    return false;
  }
}

/** Multiples of 3 or 5 - E
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
Courtesy of projecteuler.net (Problem 1) */

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

// Day 4

/**
The Hashtag Generator - M
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag(str) {
  // empty string return false
  if (str.trim().length === 0) {
    return false;
  }
  // check string and remove extra spaces between the sentense, then split into array
  let word = str.replace(/\s+/g, ' ').trim().split(' ');
  // map over the array and capitalize the first letter of each word
  let newArr = word.map((e) => e[0].toUpperCase() + e.substring(1));
  // check if the final result is longer than 140 chars
  if (newArr.join('').length > 139) {
    return false;
  } else {
    return '#' + newArr.join('');
  }
}
console.log(generateHashtag(' Do  we  have A  Hashtag'));
console.log(generateHashtag('code' + ' '.repeat(100) + 'wars'));
console.log(generateHashtag('Why do we have eat       like this'));
console.log(generateHashtag('a'));
console.log(generateHashtag('Why coding is so hard'));
console.log(generateHashtag('a'.repeat(140)));

/** DNA to RNA Conversion - E
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));

// Day 5

/** Greed is Good - M
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5) */

function score(dice) {
  let sum = 0;
  let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < dice.length; i++) {
    count[dice[i]] += 1;
  }
  if (count[1] > 0) {
    if (count[1] % 3 === 0) {
      sum += 1000;
    } else if (count[1] / 3 >= 1) {
      sum += 1000 + (count[1] % 3) * 100;
    } else {
      sum += (count[1] % 3) * 100;
    }
  }
  if (count[2] / 3 >= 1) {
    sum += 200;
  }
  if (count[3] / 3 >= 1) {
    sum += 300;
  }
  if (count[4] / 3 >= 1) {
    sum += 400;
  }
  if (count[5] > 0) {
    if (count[5] % 3 === 0) {
      sum += 500;
    } else if (count[5] / 3 >= 1) {
      sum += 500 + (count[5] % 3) * 50;
    } else {
      sum += (count[5] % 3) * 50;
    }
  }
  if (count[6] / 3 >= 1) {
    sum += 600;
  }

  return sum;
}
// clever solution from other developers
/**
 * function score(dice) {
  const score = [0, 0, 0, 0, 0, 0];
  const tdr = [1000, 200, 300, 400, 500, 600];
  const sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach((x) => {
    score[x - 1]++;
  });
  return score.reduce((s, x, i) => {
    return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
  }, 0);
}
 */

// Day 6 16/Apr/23 - E
/**
String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending) {
  return str.endsWith(ending);
}

// Sum Strings as Numbers - H 4kyu
// Given the string representations of two integers, return the string representation of the sum of those integers.
// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
// I have removed the use of BigInteger and BigDecimal in java
// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
function sumStrings(a, b) {
  let sum = BigInt(Number(a)) + BigInt(Number(b));
  return sum.toString();
  // this does not work big numbers
}
console.log(
  sumStrings('712569312664357328695151392', '8100824045303269669937')
);

// Day 7 17/Apr/23
/** Replace With Alphabet Position - M 6kyu
DESCRIPTION:
Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

function alphabetPosition(text) {
  const char = 'abcdefghijklmnopqrstuvwxyz';
  let num = [];
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let index = char.indexOf(text[i]);

    if (index === -1) {
      continue;
    } else {
      num.push(index + 1);
    }
  }
  return num.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
