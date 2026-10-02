/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    let temp = head
    this.arr = []
    while (temp !== null) {
        this.arr.push(temp.val)
        temp = temp.next
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let random = Math.floor(Math.random() * this.arr.length)
    return this.arr[random]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
