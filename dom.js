const A = document.getElementById("one");
console.log(A.innerHTML);
A.innerHTML = "Another value here";
console.log(A.innerHTML);
// Changing image tag
const img = document.getElementById("img1");
console.log(img);
img.style.height = "100px";
img.style.width = "100px";
img.src = "images/cute-kid-with-abacus-studio.jpg";
// Getting elements by class name
const x = document.getElementsByClassName("demo");
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
x[2].innerHTML = "New Para";
// Looping through x value
for (let i = 0; i < x.length; i++) {
  x[i].style.color = "fuchsia";
  x[i].style.backgroundColor = "blue";
  x[i].style.padding = "20px";
  x[i].style.height = "200px";
  x[i].style.width = "200px";
  x[i].style.borderRadius = "50%";
  x[i].style.fontFamily = "blackadder itc";
  x[i].style.backgroundImage =
    "repeating-radial-gradient(red , yellow 10%, orange 20%)";
  //   console.log(x[i]);
}
// Getting elements by Tag name
const c = document.getElementsByTagName("h4");
console.log(c);
c[0].innerHTML = "Updated Header Four";
c[0].style.color = "red";
// Getting element using querySelector
const d = document.querySelector(".h5");
console.log(d);
d.style.color = "blue";
// Getting elements using querySelectorAll
const e = document.querySelectorAll(".demo");
console.log(e);
// Create Element
const div = document.createElement("div");
div.textContent = "Div Container";
// Getting the body element by id of 'body'
const body = document.getElementById("body");
// append the div element to the body element
body.appendChild(div);

// handleSubmit function

const handleSubmit = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dated = document.getElementById("dated").value;
  if (email == "") {
    alert("Email field is required");
  } else if (password == "") {
    alert("Password field is required");
  } else if (dated == "") {
    alert("Date field is required");
  } else {
    alert(`${email}:${password}:${dated}`);
  }
};

// mini calculator
const screen = document.getElementById("screen");
screen.style.backgroundColor = "black";
screen.style.color = "white";
screen.style.height = "50px";
screen.style.width = "300px";
// show function
const show = function () {
  return (screen.value += this.value);
  //   console.log(this.value);
};
// Clear button
const clearInput = function () {
  return (screen.value = "");
};
// Evaluating the input using javascript eval()
const res = function () {
  let re = screen.value;
  return (screen.value = eval(re));
};
// Getting the button element by tag name
const btn = document.getElementsByTagName("button");
// console.log(btn);
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", show);
  //   console.log(btn[i]);
}
