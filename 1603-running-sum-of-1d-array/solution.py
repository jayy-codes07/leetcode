class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:

        sum = []
        runningsum = 0
        for i in range(len(nums)):
            runningsum +=nums[i]
            sum.append(runningsum)

        
            
        return sum    


        
