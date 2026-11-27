/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0
    let last = nums.length - 1
    let startPoint = -1
    let endPoint = -1

    while (start <= last) {
        let middle = Math.floor((start + last) / 2)
        if (target == nums[middle]) {
            startPoint = middle
            last = middle - 1
        } else if (target > nums[middle]) {
            start = middle + 1
        }
        else {
            last = middle - 1
        }
    }
    start = 0
    last = nums.length - 1

    while (start <= last) {
        let middle = Math.floor((start + last) / 2)
        if (target == nums[middle]) {
            endPoint = middle
            start = middle + 1
        } else if (target > nums[middle]) {
            start = middle + 1
        }
        else {
            last = middle - 1
        }
    }

    return [startPoint, endPoint]
};
