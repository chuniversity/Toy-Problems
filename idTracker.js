/**
 * Implement the function idTracker:
 * 
 * idTracker should: 
 * - Expect a limit (integer) as the only argument
 * - Return a function
 * 
 * The returned function should: 
 * - Accept a name string as the only argument
 * - While under the id assignment limit, it should return new id's for each name
 * - When over the id assignment limit, it should return the string "Limit Reached" for new names
 * - When over the id assignment limit, it should still return the id numbers for people added
 * before the limit was reached
 * 
 */
function idTracker(limit) {
  // save name and ID to cache

  var cache = {}
  id = 0
  return function () {
    var args = Array.prototype.slice.call(arguments);
    id++;
    if (cache[args]) {
      return cache[args]
    }
    if (id <= limit) {
      cache[args] = id
      return cache[args]
    } else {
      return 'Limit Reached'
    }
  }

};



let idThree = idTracker(3);
output1 = idThree('Budd') // return 1
output2 = idThree('Paige') // return 2
output3 = idThree('Leslie') // return 3
output4 = idThree('Bill') // return 'Limit Reached'
output5 = idThree('Budd') // return 1

console.log(output1)
console.log(output2)
console.log(output3)
console.log(output4)
console.log(output5)
