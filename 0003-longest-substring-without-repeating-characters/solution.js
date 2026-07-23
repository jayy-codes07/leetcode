/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let output = 0
    let left = 0
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (map.has(char) && map.get(char) >= left) left = map.get(char) + 1
        map.set(char, i)

        output = Math.max(output, i - left + 1)
    }
    return output
};
