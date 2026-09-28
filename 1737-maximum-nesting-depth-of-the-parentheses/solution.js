/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let res = 0
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            res++
            counter = Math.max(res, counter)
        }
        if (s[i] == ")") {
            res--
            counter = Math.max(res, counter)
        }
    }

    return counter

};

