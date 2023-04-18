console.log("100 day coding challenge");

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
