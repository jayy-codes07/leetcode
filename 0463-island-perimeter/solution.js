/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    let answer = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let val = 0
            if (grid[i][j] == 1) {
                if (grid[i][j - 1] !== 1) val++
                if (grid[i][j + 1] !== 1) val++
                if (i - 1 < 0 || grid[i - 1][j] !== 1) val++
                if (i + 1 >= grid.length || grid[i + 1][j] !== 1) val++

            }
            answer += val
        }

    }

    return answer
};
