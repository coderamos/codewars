// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

function deepCount(array) {
  let lengthCount = 0;
  for (let i = 0; i < array.length; i++) {
    lengthCount += 1;
    if (Array.isArray(array[i])) {
      lengthCount += deepCount(array[i]);
    }
  }
  return lengthCount;
}

const array7 = [1, 2, [3, 4, [5]]];
console.log(deepCount(array7));
