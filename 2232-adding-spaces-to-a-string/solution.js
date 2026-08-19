/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let response = []
    let j = 0
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[j]) {
            response.push(" ")
            j++
        }
        response.push(s[i])
    }
    return response.join("")
};
