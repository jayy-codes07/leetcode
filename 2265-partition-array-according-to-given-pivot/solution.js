/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {

    let leftarr = []
    let rightarr = []
    let midarr = []
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        if (pivot > nums[i]) leftarr.push(nums[i])
        else if (pivot < nums[i]) rightarr.push(nums[i])
        else {
            midarr.push(nums[i])
        }
    }
    return [...leftarr, ...midarr, ...rightarr]
};
