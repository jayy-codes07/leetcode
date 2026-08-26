/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {

    for (let i = 0; i < matrix[0].length; i++) {
        let temp = []
        let max = 0
        for (let j = 0; j < matrix.length; j++) {

            if (matrix[j][i] == -1) {
                temp.push(j)
            }
            max = Math.max(matrix[j][i], max)
        }
        for (let k = 0; k < temp.length; k++) {
            if (matrix[temp[k]][i] == -1) {
                matrix[temp[k]][i] = max
            }
        }
    }
    return matrix
};
