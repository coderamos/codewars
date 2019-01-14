/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number*/

function reducedValue(num) {
    const array = [...String(num)].map((value, index) => (parseInt(value)));
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    console.log('chamou reducedValue')
    // console.log(array.reduce(reducer))
    return array.reduce(reducer)
}

function persistence(num) {
    let numToArrayString = [...String(num)]
    console.log(`numToArrayString = ${numToArrayString}`)
    let persistence = 0;
    let valueReduced = reducedValue(num);
    console.log(`value reduced: ${valueReduced}`)

    for (let i = 0; i < String(valueReduced).length; i++) {

    }
    // let value = 0;
    // if (String(value).length < 2) {
    //     return console.log('string de 1 número: ' + value)
    // } 

}
console.log(persistence(39));

// console.log(reducedValue(39))
