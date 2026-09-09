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
var getDecimalValue = function (head) {
    let num = ""
    while (head !== null) {
        let temp = head
        num += temp.val
        head = head.next
    }

    return parseInt(num, 2)
};
