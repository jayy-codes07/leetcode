
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        length = 0
        array=[]
        while(head!=None):
            array.append(head)
            head = head.next
            length =length+1
        return array[len(array) // 2]

        
