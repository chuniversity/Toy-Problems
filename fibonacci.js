// demonstrate recursion - function references itself

function fibNumber (num) {
  if (num === 0 || num === 1) {
    return num
  }
  return fibNumber(num - 2) + fibNumber(num - 1)
}


console.log(fibNumber(20));

// ------- next ------- //



function fibonacci(n) {
  var arr = [0,1]
  for (let i = 2; i < n; i++) {
    arr.push(arr[i-1] + arr [i - 2])
  }
  return arr[n-1]
}
console.log(fibonacci(20))


// ------- next ------- //

function recursiveFibOne(n) {
  if (n < 3) {
    return n - 1
  } else {
    return recursiveFibOne(n - 1) + recursiveFibOne(n - 2)
  }
}
console.log(recursiveFibOne(20))

console.log(20)


