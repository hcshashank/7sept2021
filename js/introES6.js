console.log("Hello ES6");

let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x);
}
console.log(x);

var a = 101;
// console.log(window.a);
console.log(a)

let a1 = 102;
console.log(a1);


//****WEB API */

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

console.log("i am let variable");

for (let i = 0; i < 5; i++) {
  setTimeout(function shashank() {
    console.log(i);
  }, 1000);
}

/**Temporal death zone */

{
  // TDZ START HERE
  let log = function () {
    console.log(message);
  };
}

{
    let word = shashank;
    console.log(word)
    word = gupta;

}

/** const CONSTANT-NAME = value */

const RATE = 0.50

console.log(RATE)
