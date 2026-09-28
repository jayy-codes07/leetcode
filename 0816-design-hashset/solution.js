function Node(val, next = null) {
    this.val = val
    this.next = next
}

var MyHashSet = function () {
    this.size = 1000
    this.bucket = new Array(this.size)
    for (let i = 0; i < this.size; i++) {
        this.bucket[i] = new Node(-1)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.contains(key)) return

    const head = this.bucket[key % this.size]
    head.next = new Node(key, head.next)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let curr = this.bucket[key % this.size]
    while (curr !== null && curr.next !== null) {
        if (curr.next.val == key) {
            curr.next = curr.next.next
            break
        }
        else curr = curr.next
    }

};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let curr = this.bucket[key % this.size].next
    while (curr !== null) {
        if (curr.val == key) {
            return true
        }
        curr = curr.next
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
