/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0
    let setallow = new Set(allowed)
    for (let i = 0; i < words.length; i++) {
        let valid = true
        for (let j = 0; j < words[i].length; j++) {
            if (!setallow.has(words[i][j])) {
                valid = false
                break
            }
        }

        if (valid) result++
    }
    return result
};
