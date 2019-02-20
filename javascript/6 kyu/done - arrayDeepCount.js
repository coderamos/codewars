/* Array.prototype.length will give you the number of top - level elements in an array.
Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner - level arrays.
For example:
deepCount([1, 2, 3]);
//>>>>> 3
deepCount(["x", "y", ["z"]]);
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);
//>>>>> 7
The input will always be an array. */

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
