/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let result = 0
    let first = s.charCodeAt(0)
    for (let i = 1; i < s.length; i++) {
        let minus = Math.abs(first - s.charCodeAt(i))
        result += minus
        first = s.charCodeAt(i)
    }
    return result
};
