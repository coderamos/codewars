// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

const oddOrEven = (arrayOfIntegers, remainder) => {
  return arrayOfIntegers.filter(value => Math.abs(value) % 2 === remainder);
};

function findOutlier(integers) {
  let odd = oddOrEven(integers, 0);
  let even = oddOrEven(integers, 1);
  return odd.length < even.length ? odd[0] : even[0];
}

let arrayTest = [2, 4, 0, 100, 4, 11, 2602, 13, 36];
console.log(findOutlier(arrayTest));
