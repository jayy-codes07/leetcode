/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let start = 0
    let last = matrix.length - 1
    let temp = 0
    while (start <= last) {
        let middle = Math.floor((start + last) / 2)

        if (matrix[middle][0] === target) {
            temp = middle
            start = middle + 1
        }
        else if (matrix[middle][0] > target) {
            last = middle - 1
        }
        else {
            start = middle + 1
            temp = middle
        }
    }

    start = 0
    last = matrix[0].length - 1
    while (start <= last) {
        let middle = Math.floor((start + last) / 2)

        if (matrix[temp][middle] === target) return true
        else if (matrix[temp][middle] > target) {
            last = middle - 1
        }
        else {
            start = middle + 1
        }
    }
    return false


};
