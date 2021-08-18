// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  var newText = text.toLowerCase()
  var mySet = new Set()
  var array = newText.split('')
  for (var i = 0; i < array.length; i++) {
    mySet.add(array[i])
  }
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  var arrayLength = array.length
  var setSize = mySet.size
  if (arrayLength === setSize) {
    return true
   } else {
     return false
   }
}

// ASSERTION FUNCTION(S) TO BE USED

function assertIsogram (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log(`FAILED ${testName}, expected ${expected} but got ${actual}`)
  }

}


// TESTS CASES
var result1 = isIsogram('testomg')
assertIsogram(result1, true, 'is this an isogram')

var result2 = isIsogram('uncopyrightable')
assertIsogram(result2, true, 'is this an isogram')

var result3 = isIsogram('Shits')
assertIsogram(result3, true, 'is this an isogram')