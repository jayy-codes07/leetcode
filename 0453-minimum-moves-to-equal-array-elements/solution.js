/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let sum = 0
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        min = Math.min(min, nums[i])
    }
    return sum - (min * nums.length)
};
