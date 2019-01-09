/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.*/

function capitalize(s) {
    return [s.split('').map((value, index) => (index % 2 == 0 ? value.toUpperCase() : value)).join(''), s.split('').map((value, index) => (index % 2 == 0 ? value : value.toUpperCase())).join('')];
};
string = 'abcdef';

console.log(capitalize(string));

/* alternative solution
const paresMaisculas = (value, index) => index & 0 == 0 ? value : value.toUpperCase();
const imparesMaisculas = (value, index) => index & 1 == 1 ? value.toUpperCase() : value;

const convertToString = (s, array) => [...s].map(array).join('');

const stringParesMaisculas = (s) => convertToString(s, paresMaisculas);
const stringImparesMaisculas = (s) => convertToString(s, imparesMaisculas);

function capitalize(s) {
    return [stringParesMaisculas(s), stringImparesMaisculas(s)];
};
string = 'abcdef';
console.log(capitalize(string));
*/

