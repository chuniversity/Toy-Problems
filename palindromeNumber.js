/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. 
For example, 121 is palindrome while 123 is not.

*/

//convert to a string
var isPalindrome2 = function(x) {
  let str = x.toString();
  return str === str.split('').reverse().join('');
};

//without convert to a string

var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) return false;
    let reversed = 0;
    let y = x;
    while (y > 0) {
      let lastDigit = y % 10;
      reversed = (reversed * 10) + lastDigit;
      y = (y/10) | 0
    }
    return x === reversed;
   
};

x = 11
console.log(isPalindrome(x))