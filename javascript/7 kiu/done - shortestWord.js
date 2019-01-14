/*Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.*/

function findShort(s) {
    let minLength = s.length;
    s.split(' ').map(function (value) {
        value.length < minLength ? minLength = value.length : false;
    })
    return minLength
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
