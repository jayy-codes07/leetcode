/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    let res = 0
    for (let i = 0; i < s.length; i += 2) {
        // if (i % 2 == 0) curr = s[i]

        // else {
        //     if (curr !== s[i]) res++
        // }

        if (s[i] !== s[i + 1]) res++
    }
    return res
};
