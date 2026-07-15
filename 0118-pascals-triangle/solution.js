/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let ans = []
    ans.push([1])
    for (let i = 2; i <= numRows; i++) {
        let arr = []
        arr.push(1)
        for (let j = 1; j < i - 1; j++) {

            let jval = ans[i - 2][j] + ans[i - 2][j - 1]
            arr.push(jval)
        }
        arr.push(1)
        ans.push(arr)
    }
    return ans
};
