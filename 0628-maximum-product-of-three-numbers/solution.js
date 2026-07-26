/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let totalnum = nums.length
    let arr = nums.sort((a, b) => b - a)
    let response = Math.max(arr[0] * arr[1] * arr[2], arr[totalnum - 1] * arr[totalnum - 2] * arr[0])

    return response
};
