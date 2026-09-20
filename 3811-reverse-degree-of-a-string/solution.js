/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let total = 0
    let mul = 1
    for (ind in s) {
        total += (123 - s[ind].charCodeAt(0)) * mul
        mul++
    }
    return total
};
