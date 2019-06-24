// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
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
