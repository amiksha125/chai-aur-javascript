// Primitive

// 7 types: String, Number, Boolean, null, primitive, symbol, bigint

//JS is dynamically types , without specifying data types
const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined
//symbol returns symbol object
const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId); //false
//bigint
const bifNumber = 23475876978253757627537n;

//Reference Type : Array, Object, Function
//Array : []
const heroes = ["shaktiman", "naagraj", "doga"];
//Objects are defined as key-value pair inside curly braces
let myObj = {
    name: "amiksha",
    age: 20,
    goal: "Engineer"
}

console.log(myObj.name);

// we can treat function as a variable in js 

const myFunction = function (a, b){
    return a + b;
}

console.log(myFunction(3, 4));

console.log(typeof myFunction);// function object
console.log(typeof myObj);
console.log(typeof heroes); //object

//explore typeof for all the primitives , its written in notebook


