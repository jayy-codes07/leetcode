/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashmap = {}

    for (let i = 0; i < nums.length; i++) {
        hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1
    }

    let val = 0
    let ans = 0 
    for (key in hashmap) {
        if (hashmap[key] > val) {
            val = hashmap[key]
            ans = key
        }

    }
    return Number(ans)

};
