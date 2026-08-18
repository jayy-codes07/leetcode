/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let bit = n.toString(2)
    let ans = [...bit].map(ch => ch === '0' ? '1' : ch)
    return parseInt(ans.join(""), 2)
};
