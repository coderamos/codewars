// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
    return parseInt([...String(n)].map(Number).sort((a, b) => b - a).join(``))
}
console.log(descendingOrder(1254859723));
