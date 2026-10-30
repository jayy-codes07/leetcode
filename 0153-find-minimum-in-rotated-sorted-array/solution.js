/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let middle = Math.floor((left + right) / 2)
        //  sorted
        if (nums[middle] > nums[right]) {
            left = middle + 1
        }
        // unsorted
        else {
            right = middle

        }

    }
    return nums[left]
};
