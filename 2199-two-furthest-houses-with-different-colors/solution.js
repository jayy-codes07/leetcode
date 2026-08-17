/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    // let distance = 0
    let left = 0
    let right = colors.length - 1
    let fromleft = 0
    while (true) {
        if (colors[left] !== colors[right]) {
            fromleft = right - left
            break
        }
        left++
    }
    left = 0
    right = colors.length - 1
    let fromright = 0

    while (true) {
        if (colors[left] !== colors[right]) {
            fromright = right - left
            break
        }
        right--
    }
    return Math.max(fromright, fromleft)

    // for (let i = 0; i < colors.length; i++) {
    //     let temp = 0
    //     for (let j = colors.length - 1; j >= 0; j--) {
    //         if (colors[i] !== colors[j]) {
    //             temp = j - i
    //         }
    //         distance = Math.max(temp, distance)
    //     }
    // }
    // return distance

};
