/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    // let positive = 0
    // let nagative = 0

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) positive++
    //     else if (nums[i] < 0) nagative++
    // }

    // return Math.max(positive, nagative)

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        // if (nums[middle] === 0) left = middle
        if (nums[middle] >= 0) {
            right = middle - 1
        } else if (nums[middle] < 0) {
            left = middle + 1
        }
    }
    let nagative = left

    left = 0
    right = nums.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        // if (nums[middle] === 0) left = middle
        if (nums[middle] > 0) {
            right = middle - 1
        } else if (nums[middle] <= 0) {
            left = middle + 1
        }
    }
    let positive = nums.length - left;


    return Math.max(nagative, positive)
};
