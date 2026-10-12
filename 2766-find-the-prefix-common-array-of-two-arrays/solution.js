/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let arr = []
    for (let i = 0; i < A.length; i++) {
        let total = 0
        for (let j = 0; j <= i; j++) {
            for (let k = 0; k <= i; k++)
                if (A[k] == B[j]) total++
        }
        arr.push(total)
    }
    return arr
};
