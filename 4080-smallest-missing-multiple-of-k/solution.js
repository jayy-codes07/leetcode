/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    let set = new Set(nums)
    let temp = 1
    while (true) {
        if (!set.has(k * temp)) return k * temp
        temp++
    }
};
