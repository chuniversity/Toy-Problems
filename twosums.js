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
  //make hash table for storage using linear time complexity
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = i;
  }
  // iterate over array again using linear time complexity
  let indexes = [];
  for (let i = 0; i < array.length; i++) {
    let goal = target - array[i];
    if(obj[goal] && obj[goal] !== i) {
      console.log(array[i], obj[goal])
      let indexes = [];
      indexes.push(i);
      indexes.push(obj[goal]);
      return indexes;
    }
  }
  return indexes;
}




let nums = [2,7,11,15]
let target = 9

// console.log(twoSum2(nums, target));
// console.log(twoSum2([3,2,4], 6));
console.log(twoSum2([1,3,4,2], 6)); // expect [2,3]