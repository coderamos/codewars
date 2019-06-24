// https://www.codewars.com/kata/57a153e872292d7c030009d4

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
