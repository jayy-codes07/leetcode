/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
    let newarr = []
    for (let i = 0; i < order.length; i++) {
        if(friends.includes(order[i])) newarr.push(order[i])
    }
    return newarr

};
