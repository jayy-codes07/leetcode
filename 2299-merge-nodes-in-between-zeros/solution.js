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
var mergeNodes = function (head) {
    let dummy = new ListNode(0)
    let tail = dummy
    let total = 0
    head = head.next

    while (head !== null) {

        if (head.val == 0) {
            tail.next = new ListNode(total)
            tail= tail.next 
            total = 0
        }
        else total += head.val
        
        
        head = head.next

    }
    return dummy.next
};
