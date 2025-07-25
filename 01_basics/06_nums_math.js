const score = 400;
console.log(score);

const balance = new Number(100);

console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.121544351;
const other = 123.54678;

console.log(otherNumber.toPrecision(2)); //23
console.log(otherNumber.toPrecision(4)); //23.12
console.log(other.toPrecision(3)) //124
console.log(other.toPrecision(2)) //1.2e +  2

const number = 10000000
console.log(number.toLocaleString());
console.log(number.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);

//+++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4- 7));
console.log(Math.round(6.4)); // 6
console.log(Math.round(6.5)); //7
console.log(Math.ceil(4.2));// 5
console.log(Math.floor(4.2)); //4
console.log(Math.sqrt(16));
console.log(Math.max(89, 976, 89, 75));

console.log(Math.random());
console.log(Math.floor(Math.random() * 3)); // range 0 - 2
//range  1- 10 , add 1 to avoid 0
console.log((Math.random() * 10 ) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);









