// Conditional Statement: if, else if and else
var age = 66;
if (age > 18) {
  console.log("You are not an adult yet");
} else {
  console.log("You're not qualified");
}

if (age < 18) {
  console.log("You are not an adult yet");
} else if (age <= 65) {
  console.log("You're a civil servant");
} else {
  console.log("You must be retired");
}
var dtime = new Date().getHours();
console.log(dtime);
if (dtime < 12) {
  console.log("Good morning");
} else if (dtime <= 15) {
  console.log("Good afternoon");
} else if (dtime <= 20) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
// switch statement
var x = new Date().getDay();
console.log(x);
switch (x) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("No match");
}
// Ternary Operator
/*
condition?true:false
*/

age > 18 ? console.log("You're an Adul") : console.log("Child");
// Short circuit
age > 18 && console.log("You're an Adul");
