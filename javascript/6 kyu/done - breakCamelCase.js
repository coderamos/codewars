// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    let resultWord = [];
    for (let i = 0; i < string.length; i++) {
        string[i].charCodeAt() < 91 ? resultWord.push(` ${string[i]}`) : resultWord.push(string[i]);
    };
    return resultWord.join(``)
}

console.log(solution(`diegoRamos`))