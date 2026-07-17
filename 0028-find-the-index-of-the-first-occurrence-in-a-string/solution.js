/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let idx = -1
    for (let i = 0; i < haystack.length; i++) {
        let loop = 0

        if (haystack[i] == needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    loop = 1
                    break
                }
            }
            if (loop == 0) return idx = i
        }

    }
    return idx
};
