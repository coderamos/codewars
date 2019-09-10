// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(string) {
  let hasIsogram = 0;
  for (let i = 0; i < string.length; i++) {
    string.toLowerCase().includes(string[i], i + 1) ? hasIsogram++ : false;
  }
  return hasIsogram > 0 ? false : true;
}

console.log(isIsogram(`Dermatoglyphics`));
