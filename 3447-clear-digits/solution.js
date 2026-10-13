/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let res = []
    let num = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    for (let i = 0; i < s.length; i++) {
        if (num.has(s[i])) res.pop()
        else res.push(s[i])
    }
    return res.join("")
};
