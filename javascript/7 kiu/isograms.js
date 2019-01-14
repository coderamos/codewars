/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str) {
    let hasIsogram = 0;
    for (let i = 0; i < str.length; i++) {
        str.toLowerCase().includes(str[i], i + 1) ? hasIsogram++ : false;
    }
    return hasIsogram > 0 ? false : true;
}

console.log(isIsogram(`Dermatoglyphics`))
