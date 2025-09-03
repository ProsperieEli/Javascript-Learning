//The math object is how we can use arithmatic methods and properties in JS.

let x = 20
let y = 2.30
let z = 50;
console.log(Math.PI);

//rounds to nearest whole number
console.log(Math.round(y));
//always rounds down
console.log(Math.floor(y));
//always rounds up
console.log(Math.ceil(y));
//eliminates any decimal portion
console.log(Math.trunc(y));
//Raise to the power
console.log(Math.pow(x, 2))
//square root of variable
console.log(Math.sqrt(x))
//natural log
console.log(Math.log(x))
//san, tan, and cosine
console.log(Math.sin(y))
console.log(Math.tan(y))
console.log(Math.cos(y))
//absolute value of a variable
console.log(Math.abs(-21))
//get the sign
console.log(Math.sign(x))
//Max and minimum values.

let max = Math.max(x, y, z)
let min = Math.min(x, y, z)
console.log(max)
console.log(min)