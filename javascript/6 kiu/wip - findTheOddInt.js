/*Given an array, find the int that appears an odd number of times. There will always be only one integer that appears an odd number of times.*/

function findOdd(A) {
    // let newArray = A.map(function (value, index) { console.log(value) })
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] == A[j]) {
                console.log(i)
            }
        }
    }
    return 0;
}

let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
findOdd(A);
