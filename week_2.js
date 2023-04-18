// Day 8 18/Apr/23

/** You Can't Code Under Pressure #1 - E
Code as fast as you can! You need to double the integer and return it. */
function doubleInteger(i) {
  return i * 2;
}

/** Highest Scoring Word - M
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

function high(x) {
  let num = "abcdefghijklmnopqrstuvwxyz";
  let highestNumber = 0;
  let highestword = "";

  let words = x.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let wordCounter = 0;
    word.split("").forEach((letter) => {
      wordCounter += num.indexOf(letter) + 1;
    });
    if (wordCounter > highestNumber) {
      highestNumber = wordCounter;
      highestword = word;
    }
  }
  return highestword;
}

console.log(high("a ab abc take me to semynak"));
console.log(high("aa b"));

// Day 9 19/Apr/23

// Day 10 20/Apr/23

// Day 11 21/Apr/23
