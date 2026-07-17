/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let top = new Set("qwertyuiop")
    let middle = new Set("asdfghjkl")
    let bottom = new Set("zxcvbnm")

    let response = []

    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i][0].toLowerCase();
        let row;
        if (top.has(firstChar)) row = top;
        else if (middle.has(firstChar)) row = middle;
        else row = bottom;
        let valid = true
        for (let j = 1; j < words[i].length; j++) {

            if (!row.has(words[i][j].toLowerCase())) {
                valid = false
                break
            }


        }
        if (valid == true) response.push(words[i])
    }
    return response
};
