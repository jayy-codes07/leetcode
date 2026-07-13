/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    let reversed = 0
    let number = n

    while (number > 0) {

        reversed = reversed * 10 + Math.floor(number % 10)
        number -= Math.floor(number % 10) 
        number /= 10 
    }
    return Math.abs(reversed - n)
};
