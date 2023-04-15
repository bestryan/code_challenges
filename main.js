console.log('100 day coding challenge');

function solution(str, ending) {
  // TODO: complete
  for (let i = ending.length; i > 0; i--) {
    if (str[str.length - i] === ending[ending.length - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(solution('abaaacde', 'cde'));
