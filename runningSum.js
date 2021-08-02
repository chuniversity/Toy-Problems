/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/


var runningSum = function(nums) {
  let result = [];
  let temp = [];
   for (let i = 0; i < nums.length; i++) {
     let sum = 0
       for (let j = 0; j < temp.length; j++) {
         sum += temp[j]
       }
       result.push(sum + nums[i]) 
       temp.push(nums[i])
   }
   return result;
};

// [1, 1+2, 1+2+3, 1+2+3+4].

console.log(runningSum([1,2,3,4])) // expect [1,3,6,10]