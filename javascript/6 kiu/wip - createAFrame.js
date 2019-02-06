/* *************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.
Notes:
Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')
Output:
++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++ */

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
