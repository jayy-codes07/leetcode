/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b)
    let medain = nums[Math.floor(nums.length / 2)]
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += Math.abs(medain - nums[i])
    }
    return count


};
