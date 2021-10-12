/*
Given an array of integers, where all elements but one occur twice, find the unique element.

*/


function lonelyinteger(a) {
  let obj = {};
  for(let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      obj[a[i]]++;
    } else {
      obj[a[i]] = 1;
    }
  }
  for(let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}


let arr = [1,2,3,4,3,2,1];

console.log(lonelyinteger(arr)) // expect 4