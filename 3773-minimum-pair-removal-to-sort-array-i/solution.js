/**
 * @param {number[]} nums
 * @return {number}
 */
function isSorted(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) return false
    }
    return true
}

var minimumPairRemoval = function (nums) {

    let count = 0
    while (!isSorted(nums)) {
        let minIndex = 0
        let minSum = Infinity
        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i] + nums[i + 1]
            if (sum < minSum) {
                minSum = sum
                minIndex = i
            }
        }
        nums.splice(minIndex, 2, nums[minIndex] + nums[minIndex + 1])
        count++

    }

    return count

};
