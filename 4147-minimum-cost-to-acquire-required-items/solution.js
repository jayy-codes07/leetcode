/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function (cost1, cost2, costBoth, need1, need2) {

    let cost = Math.min(need1, need2)

    let opt1 = (cost1 * need1) + (cost2 * need2)

    let opt2 = (cost * costBoth) + ((need1 - cost) * cost1) + ((need2 - cost) * cost2)

    let opt3 = Math.max(need1, need2) * costBoth

    return Math.min(opt1, opt2, opt3)

};
