/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
    // let hashmap = {}
    // for (let i = 0; i < s.length; i++) {
    //     hashmap[hashmap[i]] = (hashmap[hashmap[i]] || 0) + 1
    // }
    // let count = 0
    // console.log(hashmap)
    // for (key in hashmap) {
    //     count++
    // }
    // return count
    let set = new Set(s)
    console.log(set)
    let count = [...set]
    return count.length
};
