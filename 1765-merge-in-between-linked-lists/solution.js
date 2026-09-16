/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let counter = 0
    let pointera = list1
    let pointerb = list1
    let head = list1
    while (list1 !== null) {
        if (counter === a - 1) {
            pointera = list1
        }
        if (counter === b + 1) {
            pointerb = list1
        }
        list1 = list1.next
        counter++
    }


    pointera.next = list2

    let last2 = list2

    while (last2.next !== null) {
        last2 = last2.next
    }

    last2.next = pointerb
    pointera.next = list2


    return head
};
