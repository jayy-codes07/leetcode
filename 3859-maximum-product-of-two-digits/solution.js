/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {

    let arr = n.toString().split("").sort((a, b) => b - a)

    return arr[0] * arr[1]
};
