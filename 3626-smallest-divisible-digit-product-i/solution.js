/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    let number = n
    let multiple = 1
    while (true) {

        let lastDigit = number.toString().split("")
        let product = lastDigit.reduce((accumulator, currentValue) => accumulator * Number(currentValue), 1)
        if (product % t == 0) return number
        number++

    }
};
