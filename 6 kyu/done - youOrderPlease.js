// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function getNumberInsideWord(word) {
  return [...word]
    .filter(char => {
      if (Number(char)) {
        return char;
      }
    })
    .join("");
}
function order(words) {
  let arrayWords = words.split(" ");
  let newArr = [];
  arrayWords.map((word, index) => {
    index = getNumberInsideWord(word);
    newArr[index - 1] = word;
  });
  return newArr.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
