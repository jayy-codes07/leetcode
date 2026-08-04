/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let arr = []
    words.map((i, idx) => (
        i.includes(x) && arr.push(idx)
    ))
    return arr
};
