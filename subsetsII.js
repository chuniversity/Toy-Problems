/*

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/


const subsets = (nums) => {
  let result = [[]]
  for (let i = 0; i < nums.length; i++) {
    let length = result.length;
    for(let j = 0; j < length; j++) {
        let input = result[j].concat(nums[i])
        let found = false;
        for (let k = 0; k < result.length; k++) {
          if(result[k].toString() === input.toString()) {
            found = true
          }
        }
        if(!found) {
          result.push(input);
        }
     
    }
  }
  return result
}

console.log(subsets([4,4,4,1,4]))
// [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]

// my output should be better?
// [[], [ 4 ], [ 4, 4 ], [ 4, 4, 4 ], [ 1 ], [ 4, 1 ], [ 4, 4, 1 ], [ 4, 4, 4, 1 ], [ 4, 4, 4, 4 ], [ 1, 4 ], [ 4, 1, 4 ], [ 4, 4, 1, 4 ], [ 4, 4, 4, 1, 4 ]]