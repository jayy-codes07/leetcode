/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
     let i = 0; // pointer for s
    let j = 0; // pointer for t
    
    while (j < t.length) {
        if (i < s.length && s[i] === t[j]) {
            i++;
        }
        j++;
    }
    
    return i === s.length;
};
