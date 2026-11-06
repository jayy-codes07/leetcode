/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let count = 0
    // fruits.sort((a, b) => b - a)
    // baskets.sort((a, b) => b - a)

    for (let i = 0; i < fruits.length; i++) {
        let flag = true
        for (let j = 0; j < baskets.length; j++) {
            if (baskets[j] >= fruits[i]) {
                baskets[j] = 0
                flag = false
                break
            }

        }
        if (flag) {
            count++
        }
    }
    return count


};
