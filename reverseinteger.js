//Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
// then return 0.

var reverse = function(x) {
  if (Math.abs(x) > Math.pow(2,31)-1) {
    return 0;
  }
    let pos = true;
    if(x < 0) {
      pos = false;
      x = Math.abs(x)
    }
    let arr = x.toString()
    let num = '';
    for (let i = arr.length -1; i >= 0; i--) {
      num+=arr[i];
    }
    if(Number(num) <  (Math.pow(2, 31) * -1) || Number(num) > Math.pow(2,31) - 1) {
      return 0
    }
    return (pos) ? Number(num) : 0 - Number(num);
};



let x = -123
console.log(reverse(x)) // expect -321

// let x = 1534236469;
// console.log(reverse(x));


