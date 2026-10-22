/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let half = Math.floor((left + right) / 2)
        if (nums[half] === target) return half
        if (nums[half] < target) {
            left = half + 1

        }
        else {
            right = half - 1
        }
    }
    return left

};
