// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  let numbersToArray = numbers.split(" ").map(value => parseInt(value));
  return `${Math.max(...numbersToArray)} ${Math.min(...numbersToArray)}`;
}
console.log(highAndLow("1 2 3 4 -8 5"));
