/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    let temp = head
    let prev = null
    while (temp !== null) {
        let nxt = temp.next
        temp.next = prev
        prev = temp
        temp = nxt
    }

    let max = prev.val
    let newHead = prev
    let current = newHead
    while (current !== null && current.next !== null) {
        if (current.next.val >= max) {
            max = current.next.val
            current = current.next
        } else {
            current.next = current.next.next
        }
    }

    let newprev = null
    let newtemp = newHead

    while (newtemp !== null) {
        let nxt = newtemp.next
        newtemp.next = newprev
        newprev = newtemp
        newtemp = nxt
    }

    return newprev
};
