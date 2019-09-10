// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let sum = 0;
  arr.map(function(value) {
    return value > 0 ? (sum += value) : 0;
  });
  return sum;
}
console.log(positiveSum([1, -2, 3, 4, 5]));
