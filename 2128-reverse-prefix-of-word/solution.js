/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let num = word.indexOf(ch);
    if (num === -1) {
        return word;
    }
    let rev = "";
    for (let i = num; i >= 0; i--) {
        rev += word[i];
    }
    return rev + word.slice(num + 1);
};
