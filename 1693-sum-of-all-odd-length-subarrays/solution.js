/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let total = 0

    for (let i = 1; i <= arr.length; i += 2) {

        for (let j = 0; j <= arr.length - i; j++) {
            let sum = 0;
            for (let k = j; k < j + i; k++) {
                sum += arr[k];
            }
            total += sum;
        }
    }

    return total
};
