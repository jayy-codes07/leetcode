/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let response = []
    for (let i = 0; i < n; i++) {
        response.push(nums[i])
        response.push(nums[nums.length - n + i])
    }
    return response
};
