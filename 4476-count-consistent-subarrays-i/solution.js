/**
 * @param {number[]} nums
 * @return {number}
 */
var countConsistent = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let andVal = nums[i];
        let minVal = nums[i];

        for (let j = i; j < nums.length; j++) {
            andVal = andVal & nums[j];
            minVal = Math.min(minVal, nums[j]);
            if (andVal === minVal) {
                count++;
            }
        }
    }
    return count;
};

