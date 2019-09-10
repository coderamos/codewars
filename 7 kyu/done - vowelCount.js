// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(string) {
  let vowel = `aeiou`;
  var vowelsCount = 0;
  [...string].forEach(value => (vowel.includes(value) ? vowelsCount++ : false));
  return vowelsCount;
}

console.log(getCount(`diego ramos da silva`));
