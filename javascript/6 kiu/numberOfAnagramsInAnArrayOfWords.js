// eslint-disable-next-line spaced-comment
/*An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".
Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".
Some examples:
There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]*/

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
