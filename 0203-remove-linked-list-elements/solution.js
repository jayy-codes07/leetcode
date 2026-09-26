/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let newnode = new ListNode(0)
    let temp = newnode
    temp.next = head
    while (temp !== null && temp.next !== null) {
        if (temp.next.val == val) temp.next = temp.next.next
        else temp = temp.next
    }
    return newnode.next
};
