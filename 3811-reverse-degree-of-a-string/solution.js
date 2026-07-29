/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let num = 123 - char.charCodeAt(0)
        result += num * (i + 1)
    }
    return result
};
