/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.*/

function solution(number) {
    let multiplesOfThree = [], multiplesOfFive = [];
    for (let i = 1; i < number; i++) {
        i % 3 === 0 ? multiplesOfThree.push(i) : false;
        i % 5 === 0 ? multiplesOfFive.push(i) : false;
    }
    let noRepeatArray = multiplesOfFive.concat(multiplesOfThree).filter((value, index) => multiplesOfFive.concat(multiplesOfThree).indexOf(value) == index);
    let arraySum = 0;
    for (let i = 0; i < noRepeatArray.length; i++) {
        arraySum += noRepeatArray[i];
    };
    return arraySum
};

console.log(solution(10))