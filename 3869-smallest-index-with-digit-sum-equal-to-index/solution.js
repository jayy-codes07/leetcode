/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i].toString().split("")
        let sum = temp.reduce((acc, curr) => Number(curr) + Number(acc), 0)
        if (i === Number(sum)) return i
    }
    return -1
};
