/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    let response = []
    for (let i = 0; i < matrix.length; i++) {
        let totalarr = 0
        for (let j = 0; j < matrix[i].length; j++) {
            totalarr += matrix[i][j]
        }
        response.push(totalarr)
    }
    return response
};
