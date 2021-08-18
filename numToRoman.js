var numToRoman = function(num) {
  let romanNum = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  };
  let result = "";
  function deduction(num){
    for (let roman in romanNum){
      if (num >= romanNum[roman]) {
        num -= romanNum[roman];
        result += roman;
        return deduction(num);
      }
    }
  }
  deduction(num);
  console.log(result);
  return result;
