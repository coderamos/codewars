// https://www.codewars.com/kata/5672f4e3404d0609ec00000a

const frame = (array, separator) => {
  let greaterLength = array[0].length;
  array.map((value) => {
    value.length > greaterLength ? greaterLength = value.length : false;
  });

  const matrix = array.map((value) => {
    // return `${separator} ${value} ${separator}`;
  });
  return matrix;
};

function fillsSpaces(string, length, separator) {
  let array = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < array.length; j++) {
    }
  }
}

console.log(frame(['Create', 'a', 'frame'], '+'));
// console.log(frame(['Create', 'a', 'frame', '+']));
