/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i].toString().split("")
        let ans = sum.reduce((acc, num) => acc + Number(num), 0);
        if (i == ans) return i
    }
    return -1
};
