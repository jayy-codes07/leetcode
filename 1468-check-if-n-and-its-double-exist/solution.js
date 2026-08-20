/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let hashmap = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if ((num * 2) in hashmap || (num % 2 == 0 && (num / 2) in hashmap)) return true
        hashmap[num] = true
    }

    return false
};
