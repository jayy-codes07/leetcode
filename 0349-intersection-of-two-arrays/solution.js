/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let combine = [...set1, ...set2]
    let output = []

    let hashmap = {}
    for (let i = 0; i < combine.length; i++) {
            hashmap[combine[i]] = (hashmap[combine[i]] || 0) + 1 
    }

    for(key in hashmap){
        if(hashmap[key] == 2) output.push(Number(key))
    }

    return output
};
