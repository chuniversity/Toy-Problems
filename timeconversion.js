/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/



function timeConversion(s) {
  let pm = false;
  if(s[8] === 'P') { pm = true; };
  let m = s.substring(2, 8);
  let zero = true; 
  if (s[0] === '1') { zero = false}
  
  let hour = parseInt(s.substr(0,2));
  if(!pm && hour === 12) {
    hour = '00';
  } else if (!pm && hour !== 12) {
    hour = hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  } else if (pm && hour === 12) {
    hour = hour.toString();
  } else if (pm && hour !== 12) {
    hour = (hour + 12).toString();
  }
  m = hour + m
  return m
}


let time1 = '01:00:00PM'

console.log(timeConversion(time1)) 




