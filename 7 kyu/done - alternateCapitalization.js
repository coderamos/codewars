// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(string) {
  return [
    string
      .split("")
      .map((value, index) => (index % 2 == 0 ? value.toUpperCase() : value))
      .join(""),
    string
      .split("")
      .map((value, index) => (index % 2 == 0 ? value : value.toUpperCase()))
      .join("")
  ];
}
const string = "abcdef";
console.log(capitalize(string));
