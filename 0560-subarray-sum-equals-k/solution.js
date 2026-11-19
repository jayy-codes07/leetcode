/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = i; j < nums.length; j++) {
            count += nums[j]

            if (count == k) {
                res++
                
            }
        }

    }
    return res
};

