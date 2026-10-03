/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let arr = []
    let sorted = nums.sort((a, b) => a - b)
    for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
        if (!sorted.includes(i)) arr.push(i)
    }
    return arr
};
