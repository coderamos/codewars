// https://www.codewars.com/kata/57faa6ff9610ce181b000028

function crap(garden, bags, capacity) {
  let craps = 0;
  garden.map(function (value, index) {
    return value.map(function (value, index) {
      if (value === '@') {
        craps++
        return value;
      } return ''
    });
  })
  return craps
}
const garden = [['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']];
console.log(crap(garden))