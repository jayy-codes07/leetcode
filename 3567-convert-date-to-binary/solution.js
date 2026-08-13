/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let arr = date.split("-")
    return Number(arr[0]).toString(2) + "-" + Number(arr[1]).toString(2) + "-" + Number(arr[2]).toString(2) 
};
