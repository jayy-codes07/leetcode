/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let str = n.toString();
    let count = "";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0") {
            count += str[i];
            sum += Number(str[i]);
        }
    }
    return count * sum;

};
