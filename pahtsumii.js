var pathSum = function(root, targetSum) {
  // base case
  let count = 0
  let recurse = function (root, sum) {

    if(root === null && sum === targetSum) {
      count++;
      return
    } else if (root === null) {
      return
    }

    sum += root.val;
    return recurse(root.left, sum) || recurse(root.right, sum)
  }

 recurse(root)
 return count
};


/* error
Line 49 in solution.js
             throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type list<list<integer>>");
             ^
TypeError: 0 is not valid value for the expected return type list<list<integer>>
    Line 49: Char 20 in solution.js (Object.<anonymous>)
    Line 16: Char 8 in runner.js (Object.runner)
    Line 33: Char 26 in solution.js (Object.<anonymous>)
    Line 1251: Char 30 in loader.js (Module._compile)
    Line 1272: Char 10 in loader.js (Object.Module._extensions..js)
    Line 1100: Char 32 in loader.js (Module.load)
    Line 962: Char 14 in loader.js (Function.Module._load)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    Line 17: Char 47 in run_main_module.js
/*




