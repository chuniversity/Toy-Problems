/*

Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
Ol eua juahrk znk yzxotm, eua'rr hk zu zxobogrre lotj gtuznkx yzxotm otyojk oz ayotm xkmargx Yzxotm skznujy.
If you double the string, you'll be to trivially find another string inside it using regular String methods.


Juahrkj yzxotm: 'nkrru cuxrjnkrru cuxrj'
Ykgxin c/ot oz: '       uxrjnkrru c    '

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '

*/

function isRotated(string1, string2) {
  var doubledString = string1.concat(string1)
  var search = doubledString.search(string2)
  if (search === -1) {
    return false
  } else {
    return true
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('failed')
  }
}


// tests

var actual = isRotated('hello world', 'orldhello w')
var expected = true
assertEqual(actual, expected, 'is string rotated')