/*Complete the solution so that the function will break up camel casing, using a space between words.*/

function solution(string) {
    let resultWord = [];
    for (let i = 0; i < string.length; i++) {
        string[i].charCodeAt() < 91 ? resultWord.push(` ${string[i]}`) : resultWord.push(string[i]);
    };
    return resultWord.join(``)
}

console.log(solution(`diegoRamos`))