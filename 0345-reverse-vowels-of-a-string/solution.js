/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vovals = new Set(["A", 'a', "E", "e", "I", "i", "o", "O", "U", "u"])
    let vovalsInS = []
    let arr = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (vovals.has(s[i])) {
            vovalsInS.push(s[i])
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (vovals.has(s[i])) {
            arr[i] = vovalsInS[vovalsInS.length - 1]
            vovalsInS.pop()
        }
    }
    return arr.join("")
};
