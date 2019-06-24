// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(text) {
    return text.split(' ').map((value) => value.length).sort((a, b) => a - b)[0];
}
console.log(findShort('bitcoin 11 11122233312 take over the world maybe who knows perhaps'));
