/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let vowel = `aeiou`;
    var vowelsCount = 0;
    [...str].forEach((value) => vowel.includes(value) ? vowelsCount++ : false);
    return vowelsCount
}

console.log(getCount(`diego ramos da silva`));