//two sums

/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

// double nested array
// quadratic time complexity
const twoSum = (array, target) => {
  let indexes = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    for (let j = i + 1; j < array.length; j++) {
      let next = array[j]
      if(current + next === target) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
return indexes;
}

const twoSum2 = (array, target) => {
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] - array[i+1] === target)


  }

}




let nums = [2,7,11,15]
let target = 9

console.log(twoSum(nums, target));
console.log(twoSum([3,2,4], 6));