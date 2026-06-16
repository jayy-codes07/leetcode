/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const check = (i, j) => {
        if (i >= j) return true;
        if (s[i] !== s[j]) return false;
        return check(i + 1, j - 1);
    };

    return check(0, s.length - 1);
};
