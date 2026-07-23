/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    
    let firstword = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let sub = ""
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] !== firstword[j]) break
            else {
                sub += strs[i][j]
            }
        }
        firstword = sub
    }

    return firstword
};
