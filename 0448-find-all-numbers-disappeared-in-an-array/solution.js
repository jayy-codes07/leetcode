/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    // let newset = new Set(nums)
    // let ans = []
    // for (let i = 1; i <= nums.length; i++) {
    //     if (!newset.has(i)) ans.push(i)
    // }
    // return ans


    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1
        if (nums[idx] > 0) nums[idx] = -nums[idx]
    }

    let ans = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) ans.push(i + 1)
    }

    return ans
};
