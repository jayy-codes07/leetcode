/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let response = []
    for (let i = 0; i < nums.length; i++) {
        response.push(nums[nums[i]])
    }
    return response
};
