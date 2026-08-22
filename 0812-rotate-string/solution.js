/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    for (let i = 0; i < s.length; i++) {
        let newarr = s.slice(i) + s.slice(0, i)
        if (newarr == goal) return true
    }
    return false
};
