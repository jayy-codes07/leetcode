/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max = 0
    for (let i = 0; i < sentences.length; i++) {
        let temp = sentences[i].split(" ")
        let width = temp.length
        max = Math.max(max, width)
    }
    return max
};
