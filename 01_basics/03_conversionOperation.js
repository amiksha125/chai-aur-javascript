let score = "33";

console.log(typeof(score))

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log("Now convert alpha numeric score to number")
let alphaNumber = "23oy78";

let value = Number(alphaNumber);

console.log(typeof value);
console.log(value); //NaN

console.log("Convert null to number")
let nulvalue = null;
console.log(Number(nulvalue)); //0

console.log("Convert undefined to number");

let undefinedVal = undefined;
console.log(Number(undefinedVal));

console.log("Convert boolean to number");
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log("Convert string to number");
console.log(Number("abc")); //NaN

console.log("Convert num to boolean")
let isLoggedIn = 1;
console.log(Boolean(isLoggedIn)); //true

console.log("convert string to boolean")
console.log(Boolean("")); //false
console.log(Boolean("abc")); //true

console.log("convert num to string")
console.log(String(33));

