/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let prev = head.val
    let temp = head.next
    let travel = 1

    let firstcritical = -1
    let lastcritical = -1
    let min = Infinity

    while (temp.next !== null) {
        if ((temp.val < temp.next.val && temp.val < prev) ||
            (temp.val > temp.next.val && temp.val > prev)) {
            if (firstcritical == -1) {
                firstcritical = travel
            }

            if (lastcritical !== -1) {
                min = Math.min(min, travel - lastcritical)
            }
            lastcritical = travel
        }

        prev = temp.val
        temp = temp.next
        travel++

    }
    if (lastcritical == -1 || lastcritical === firstcritical) {
        return [-1, -1]
    }

    let max = lastcritical - firstcritical
    return [min, max]


};
