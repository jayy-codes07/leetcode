/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let right1 = nums1.length - 1
    // let right2 = nums2.length - 1
    let arr1 = m - 1
    let arr2 = n - 1
    while (arr1 >= 0 && arr2 >= 0) {
        if(nums1[arr1] < nums2[arr2]){
            nums1[right1] = nums2[arr2]
            right1--
            arr2--
        }else{
            nums1[right1] = nums1[arr1]
            right1--
            arr1--
        }
    }

    while (arr2 >= 0) {
        nums1[right1] = nums2[arr2];
        arr2--;
        right1--;
    }

};
