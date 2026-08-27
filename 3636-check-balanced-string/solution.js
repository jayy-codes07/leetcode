/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let ans = 0
    for (let i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            ans += Number(num[i])
        } else {
            ans -= Number(num[i])
        }
    }
    if (ans === 0) return true
    else return false
};
