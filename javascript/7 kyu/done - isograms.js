// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
    let hasIsogram = 0;
    for (let i = 0; i < str.length; i++) {
        str.toLowerCase().includes(str[i], i + 1) ? hasIsogram++ : false;
    }
    return hasIsogram > 0 ? false : true;
}

console.log(isIsogram(`Dermatoglyphics`))
