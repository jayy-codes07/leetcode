/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let moves = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        moves += nums[i]
    }
    return (max * nums.length) - moves
};
