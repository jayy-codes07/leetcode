/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      let history = {}

    for(let i = 0;i < nums.length;i++){
        let diff = target - nums[i]

        if(history[diff] !== undefined){
            return  [history[diff],i]
        }
        history[nums[i]] = i
    }
};
