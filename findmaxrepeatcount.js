// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var letters = word.split('');
  // Count the instances of each letter
  var allLetters = {}
  // Iterate all the counts and find the highest
  for (var i = 0; i < letters.length; i++) {
    if (allLetters[letters[i]] === undefined) {
      allLetters[letters[i]] = 1
    }  else {
      allLetters[letters[i]] += 1
    }
  }
    var highest = 0;
    for (var key in allLetters) {
      if (allLetters[key] > highest) {
        highest = allLetters[key]
      } 
    }
  // Return this word's max repeat count
  return highest
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(' ')
  // For each word...
  for (var i = 0; i < words.length; i++) {
    var repeatCountForWord = findMaxRepeatCountInWord(words[i])
    // If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      // update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord
      // update wordWithMaxRepeatCount
      wordWithMaxRepeatCount = words[i]
    }
  }

  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed')
  } else {
    return `FAILED ${testName}, expected ${expected} but got ${actual}`
  }
}

// TESTS CASES

var result1 = findFirstWordWithMostRepeatedChars('snassu is a meanie')
assert(result1, 'snassu', 'Get Word with Most Repeated Charachters')

var result2 = findFirstWordWithMostRepeatedChars('snassu is a meanieaaaa')
assert(result2, 'meanieaaaa', 'Get Word with Most Repeated Charachters' )

var result3 = findFirstWordWithMostRepeatedChars('snassu is a meanieaaaa')
assert(result3, 'snassu', 'Get Word with Most Repeated Charachters' )
