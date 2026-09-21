/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let t1 = headA
    let t2 = headB
    while (t1 !== t2) {

        if (t1 == null) t1 = headB
        else t1 = t1.next

        if (t2 == null) t2 = headA
        else t2 = t2.next
    }
    return t1


};
