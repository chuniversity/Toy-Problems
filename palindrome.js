// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(' ')
  // iterate words and collect the palindromes
  var palindromes = []
  for (var i = 0; i < words.length; i++) {
    if(isPalindrome(words[i])) {
      palindromes.push(words[i])
    }
  }
 
  // sort the list of palindromes by word length]
    var sorted = palindromes.sort(sortAscendingByLength)
    var longestPalindrome = sorted.pop()

    return longestPalindrome  

  // return the largest item in the sorted list
}


function reverseString(string) {
 return string.split('').reverse().join('')
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (word === reverseString(word)) {
    return true
  } else {
    return false
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log(`Failed ${testName}`)
  }
}


// TESTS CASES

var result1 = findLongestPalindrome('madam eye base wake a racecar yabadoozawe')
assert(result1, 'racecar', "The longest palindrome")


var result2 = findLongestPalindrome('madam eye base wake a racecar yabadoozawe')
assert(result2, 'madam', 'the longest palindrome')

