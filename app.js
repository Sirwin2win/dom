// A variable is like a container for saving informations e.g var name = "Mary Doe"
// Data type talks about the type of data being stored in a variable e.g integer(int),
// string(str), Array, Object, float etc
// Ways of declaring variables: we usually use some keywords to declare variables e.g
// var,let, const.
// var is the oldest and it could be used globally and locally
// const is used to declare things we do not intend to change
// let is usually used to declare variables locally(within a scope)
console.log("Hello World");
var name = "Mary Doe";
const fruits = ["Apple", "Orange", "Banana", "Cherry"];
console.log(name);
console.log(fruits);
// Rules in choosing variable names
/*
1. Do not start a variable name with an integer
2. Variable names should relate to what the value holds
Camel case e.g firstNameDetails, middleName
pascal case e.g FirstName, LastName
snake case e.g last_name, middle_name
*/
// To check the variable/ data type, we use typeof
const a = 5;
console.log(typeof name);
console.log(typeof a);
/*
Variable scope talks where a variable was initialized.
1. Local Scope: This applies to a variable that was initialized inside a function, a loop,
a conditional statement or any block of code
2. Global scope: This are variables that was initialized outside of block programs
*/
const square = function () {
  console.log(a ** 2);
};
square();
// console.log(n);
// Operators are used to carry out operations on the variables
/*
1. Arithmetic Operator: +,-,*,/,**,%
2. Assignment Operators: =,+=,-=,*=,/=,**=,%=
3. comparison Operators: ==,!=,>,<,>=,<=
4. Logical Operators: or(||) , and (&&)
*/
// Arithmetic Operator
const x = 4;
const y = 3;
const z = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x / 2);
console.log(x ** 2);
console.log(z % 2);
// Concatenation means using the plus sign to combine strings and variables
console.log("Happy weekend " + name);
console.log(`A very happy weekend to you ${name}`);
// Assignment Operators
var c = 4;
console.log((c += 4)); // c = c + 4
console.log(c);
console.log((c -= 2)); // c = c - 2
console.log((c *= 2)); // c = c * 2
console.log((c *= 2)); // c = c * 2
console.log((c /= 2)); // c = c / 2
console.log((c **= 2)); // c = c ** 2
console.log((c %= 2)); // c = c % 2

const checker = function (a) {
  if (a % 2 == 0) {
    console.log(`${a} is an even number`);
  } else {
    console.log(`${a} is an odd number`);
  }
};

checker(100);
// Comparison Operators ==,===,!=,>,<,>=,<=
const i = 4;
const j = "4";
const k = 2;
console.log(i === j);
console.log(typeof i);
console.log(typeof j);
console.log(i != k);
console.log(i > k);
console.log(i < k);
console.log(i >= k);
console.log(i <= k);
// Logical Operators || , &&
console.log(i != k || i < k);
console.log(i != k && i < k);
console.log(false || true || false);

var f = 3;
var e = 5;
console.log(f > e || f != e);
console.log(f < e && f != e);
