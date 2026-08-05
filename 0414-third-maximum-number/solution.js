/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let set = new Set(nums)
    let sorted = [...set].sort((a, b) => b - a)
    return sorted[2] !== undefined ? sorted[2] : sorted[0]

};
