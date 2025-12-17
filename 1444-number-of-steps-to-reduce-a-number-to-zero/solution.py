class Solution:
    def numberOfSteps(self, num: int) -> int:
        steps = 0
        while(num>0):
            if(num%2==0):
                steps = steps + 1
                num /= 2
            else:
                steps = steps + 1
                num =num - 1   
        return steps
