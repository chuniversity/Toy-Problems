/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.

/*


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 let addTwoStrings = function (x, y) {
  if(x && y) {
   return (x * 1 + y * 1)
  } else if (x) {
    return x * 1
  } else if (y) {
    return y * 1
  } else {
    return 0
  }
  
}


var addStrings = function(num1, num2) {
num1idx = num1.length-1;
num2idx = num2.length-1;
let result = []
let carry = 0
  while (num1idx >=  0 || num2idx >= 0) {
    let cur = addTwoStrings(num1[num1idx], num2[num2idx])
    
    if(cur < 10) {
      if((cur + carry) < 10) {
        result.unshift((cur + carry).toString());
        carry = 0;
      } else {
        result.unshift((Math.floor(((cur + carry) / 1) % 10)).toString());
        carry = 1;
      }
    } else {
      result.unshift((Math.floor((cur / 1) % 10) + carry).toString());
      carry = 1;
    }
  num1idx--;
  num2idx--;
  if (num1idx < 0 && num2idx < 0) {
      if(carry > 0) {
        result.unshift(carry.toString())
      } 
    }
  }
return result.join('');
};