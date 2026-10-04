/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let len = 0

    let newnode = new ListNode(0)
    newnode.next = head
    let temp = newnode
    let temp2 = newnode
    while (newnode !== null) {
        len++
        newnode = newnode.next
    }
    let remove = len - n - 1
    let count = 0
    while (temp !== null && temp.next !== null) {
        if (remove == count) {
            temp.next = temp.next.next
        } else temp = temp.next
        count++
    }

    return temp2.next
};
