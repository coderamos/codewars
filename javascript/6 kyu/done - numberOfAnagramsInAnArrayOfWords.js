// https://www.codewars.com/kata/587e18b97a25e865530000d8

function anagramCounter(wordsArray) {
  let counter = 0;
  const ordenedWords = wordsArray.map(value => (
    [...value].sort().join('')));
  for (let i = 0; i < ordenedWords.length; i += 1) {
    for (let j = i + 1; j < ordenedWords.length; j += 1) {
      if (ordenedWords[i] === ordenedWords[j]) {
        counter += 1;
      }
    }
  }
  return counter;
}
const wordsArray11 = ['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'];
console.log(anagramCounter(wordsArray11));
