/* eslint-disable spaced-comment */
/*Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.
Complete the function that recieves a string and encrypt it with this simple transposition.
So the result string will be: "Sml etipetx"*/

function simpleTransposition(text) {
  const row1 = [];
  const row2 = [...text].filter((value, index) => {
    if (index % 2 !== 0) {
      return value;
    }
    row1.push(value);
  });
  return `${row1.join('')}${row2.join('')}`;
}

const text1 = 'Sample text';
console.log(simpleTransposition(text1));
