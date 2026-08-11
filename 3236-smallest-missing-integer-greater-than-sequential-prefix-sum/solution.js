/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    let preSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - 1 == nums[i - 1]) {
            preSum += nums[i]
        } else break;

    }
    while (true) {
        if (!nums.includes(preSum)) {
            return preSum
        }
        preSum++
    }

};
