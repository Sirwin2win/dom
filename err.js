/*
Error handling is a way of managing errors in our programs. Instead of allowing an error
to crash our program, we can manage the error in such a way that it will allow our
program to continue while we send out a user friendly error message to guid our users.
It comes as a try...catch block. Where the try block is a block of code, say a function,
loop, array of any code whatsoever that we want to try out. If an error occurs at the 
try level, we handle it at the catch(i.e catching and not allowing it to crash our code)
level and send out a user friendly message
try{
// block of code to try out
}catch(error){
// catch returns an object e.g error, err. This object has two methods
1. name: The name of the error e.g Syntax error
2. message: The message pointing towards the error.
console.log(error.message)
}finally{
console.log("All good")
}
*/
const divide = function (x, y) {
  let z = x / y;
  return z;
};

try {
  console.log(divide(10, 2));
} catch (err) {
  console.log(`${err.message} ; Please check what you typed`);
} finally {
  console.log("Finally done");
}
console.log("Hello world");
