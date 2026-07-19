/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let ans = nums.length; // start with n
    for (let i = 0; i < nums.length; i++) {
        ans += i - nums[i];
    }
    return ans;

};
