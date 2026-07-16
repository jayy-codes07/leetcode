/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let hashmap = {}

    let val = -1
    let max = -1
    for (let i = 0; i < s.length; i++) {
        if (hashmap[s[i]] !== undefined) {
            val = i - hashmap[s[i]] - 1
            max = Math.max(max, val)

        } else hashmap[s[i]] = i



    }


    return max

};
