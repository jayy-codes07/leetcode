/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let temp = head
    let left = new ListNode(0)
    let main = left
    let right = new ListNode(0)
    let rightMain = right
    while (temp !== null ) {
        if (temp.val < x) {
            left.next = new ListNode(temp.val)
            left = left.next
        }
        if (temp.val >= x) {
            right.next = new ListNode(temp.val)
            right = right.next
        }
        temp = temp.next
    }
    while (left !== null) {
        if (left.next == null) {
            left.next = rightMain.next
            break
        }
        left = left.next
    }
    return main.next
};
