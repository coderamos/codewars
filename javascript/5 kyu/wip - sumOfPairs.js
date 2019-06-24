// https://www.codewars.com/kata/54d81488b981293527000c8f

var sum_pairs = function (arrayIntegers, sum) {
    let result = [];
    arrayIntegers.forEach(function (valueForEach, indexForEach) {
        arrayIntegers.map(function (valueMap, indexMap) {
            if (valueForEach + valueMap == sum && indexForEach < indexMap) {
                result.push(valueForEach, valueMap)
            }
        })
    })
    return result
}
console.log(sum_pairs([11, 3, 7, 5], 10))
