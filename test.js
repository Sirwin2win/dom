const name = "Mary Doe";
console.log(name);
let a = 4;
let b = 0;
const obj = {
  name: "Joel",
  age: 20,
};
console.log(obj.name);
console.log(obj.age);
try {
  console.log(a / b);
} catch (error) {
  //   console.log(error.name);
  console.log(
    `${error.name}:${error.message} ; Please check what you are inputing`
  );
} finally {
  console.log("All good");
}
console.log(a);
