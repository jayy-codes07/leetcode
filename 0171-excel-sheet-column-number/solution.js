/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let output = 0
    let range = 0

    for (let i = 0; i < columnTitle.length; i++) {
        let plus = (columnTitle.charCodeAt(i) - 64)
        output = output * 26 + plus
    }

    return output
};
