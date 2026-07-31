/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let plainarr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0
    let right = plainarr.length - 1

    while (left < right) {
        if (plainarr[left] != plainarr[right]) return false

        left++
        right--
    }

    return true
};
