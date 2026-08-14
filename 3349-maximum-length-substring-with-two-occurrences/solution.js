/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let count = {}
    let left = 0
    let result = 0

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1

        while (count[s[i]] > 2) {
            count[s[left]]--
            left++
        }

        result = Math.max(result, i - left + 1)
    }

    return result
};
