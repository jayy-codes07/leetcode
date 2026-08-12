/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    let left = 0
    let maxLen = 0
    let hashmap = {}
    for (let i = 0; i < nums.length; i++) {

        hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1
        while (hashmap[nums[i]] > k) {
            hashmap[nums[left]]--
            left++
        }
        maxLen = Math.max(maxLen, i + 1 - left)
    }
    return maxLen
};
