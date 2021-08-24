 

 var add = function(a, b) {
  return a + b;
  }
 
 var nTimes = function(n, func) {
   // Your code here
   // counter if we are less than n
   var counter = 0;
   // last element variable
   var lastElement;
 
   return function(...args) {
     if (counter < n) {
       lastElement = func(...args)
       counter += 1;
       return lastElement
     } else {
       return lastElement
     }
   }
 };
 
 
   var add3Times = nTimes(3, add);
 console.log(
  add3Times(1, 5),
  add3Times(4, 9),
  add3Times(6, 5),
  add3Times(2, 3), 
  add3Times(9, 8)
 )