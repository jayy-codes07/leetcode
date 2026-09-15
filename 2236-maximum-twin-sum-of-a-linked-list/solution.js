/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let slow = head
    let fast = head
    let temp = null
    let curr = head

    while (fast !== null && fast.next !== null) {
        // move 2 pointer
        fast = fast.next.next
        slow = slow.next

        // reverse
        let next = curr.next
        curr.next = temp
        temp = curr
        curr = next
    }

    let maxval = 0
    while (temp !== null && slow !== null) {
        let sum = temp.val + slow.val

        maxval = Math.max(sum, maxval)
        temp = temp.next
        slow = slow.next
    }
    return maxval

};
