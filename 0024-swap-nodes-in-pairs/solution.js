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
var swapPairs = function (head) {
    let temp = head
    let prev = null
    while (temp !== null && temp.next !== null) {
        let first = temp
        let second = temp.next
        let third = temp.next.next

        second.next = first
        first.next = third

        if (prev == null) {
            head = second
        } else {
            prev.next = second
        }
        prev = first
        temp = third
    }
    return head
};
