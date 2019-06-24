// https://www.codewars.com/kata/514b92a657cdc65150000006

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