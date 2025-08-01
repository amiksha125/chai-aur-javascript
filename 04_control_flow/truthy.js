const userEmail = "tak@amiksha.ai"
let email;
const emptyEmail = "";
if (userEmail) {
    console.log("Got user email"); //executed
} else {
    console.log("Dont have user email");
    
}

if (email) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");//executed
    
}

if (emptyEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email"); //executed
    
}

// if value of variable is undefined or "" then it is evalauted to false
//For empty [] array its true

// ***********************Truthy and Falsy Values *************************
//Falsy values
// false, 0, -0, bigint 0n, "", null, undefined, NaN
// all values other than above are truthy values

//Truthy values surpricing:
// "0", 'false', " ", {}, [], function(){}

// empty array and empty obj are truthy values then how to check if they are empty
//array
const arr = [];
const obj = {};
if(arr.length === 0){
    console.log("array is empty");
}

if(Object.keys(obj).length === 0){
    console.log("object is empty");
}
// false == 0, 0 == '', false == '' are evaluated to true
console.log(0 == null); //false

//Nullish Coalescing operator ?? : null, undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5
let val2 = null ?? 10;
console.log(val2); // 10
let val3 = undefined ?? 15;
console.log(val3); // 15

let val4 = undefined ?? null;
console.log(val4);
let val5 = null ?? undefined;
console.log(val5);

console.log(null ?? 10 ?? 30); //10

//Ternary operator

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");









