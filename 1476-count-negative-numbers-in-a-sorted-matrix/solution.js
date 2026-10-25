/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        //     for (let j = 0; j < grid[i].length; j++) {
        //         if (grid[i][j] < 0) count++
        //     }
        let left = 0
        let right = grid[i].length
        while (left < right) {
            let middle = Math.floor((left + right) / 2)
            if (grid[i][middle] < 0) {
                right = middle
            } else {
                left = middle + 1
            }
        }
        count += grid[i].length - left

    }
    return count

};
