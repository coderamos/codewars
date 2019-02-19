/*Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)*/

// String.prototype.camelCase = function () {
//   //your code here
// }

String.prototype.camelCase = function () {
  if (!this) return '';
  const arrayOfStrings = this.trim().toLowerCase().split(' ').map((word) => {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1)
  });
  return arrayOfStrings.join('')
}

const string = 'Hello Case';
const stringEmpty = '';
console.log(string.camelCase())