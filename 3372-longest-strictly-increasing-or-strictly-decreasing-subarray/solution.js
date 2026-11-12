/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let max = 1
    let inc = 1
    let desc = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc++
            desc = 1
        }

        else if (nums[i] < nums[i - 1]) {
            desc++
            inc = 1
        } else {
            inc = 1
            desc = 1
        }
        max = Math.max(inc, desc, max)
    }
    return max
};
