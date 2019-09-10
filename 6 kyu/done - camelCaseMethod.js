// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase = function() {
  if (!this) return "";
  const arrayOfStrings = this.trim()
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    });
  return arrayOfStrings.join("");
};

const string = "Hello Case";
const stringEmpty = "";
console.log(string.camelCase());
