/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let alphabet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    for (let i = 0; i < sentence.length; i++) {
        if (alphabet.has(sentence[i])) {
            alphabet.delete(sentence[i])
        }
    }
    if (alphabet.size === 0) return true
    else return false

};
