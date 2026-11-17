/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    let even = 1
    let odd = 0
    let sum = 0
    let count = 0

    let MOD = 1e9 + 7

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        //     let temp = 0
        //     for (let j = i; j < arr.length; j++) {
        //         temp += arr[j]
        if (sum % 2 === 0) {
            count += odd
            even++
        } else {
            count += even
            odd++
        }

        count %= MOD
        //     }
    }
    return count
};
