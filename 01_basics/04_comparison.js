//relational operator across different datatypes
console.log(2 == 1);
console.log(2 === 2);

console.log(2 != 1);
console.log(2 > 1);
console.log(2 < 1);

console.log("Comparing string with integer");

console.log("2" > 5);
console.log("02" > 1);

console.log("comparing null with 0")
console.log(null > 0); //false 0 > 0
console.log(null == 0); //null == 0 false
console.log(null >= 0);//true 0 >= 0 is true

//comparison converts null to 0, equality does not

console.log("comparing undefined to 0");
console.log(undefined == 0); 
console.log(undefined > 0);
console.log(undefined <= 0); // all false
//avoid above comparison and prefer clean code


//Strict check === 
//checks values with its datatypes

console.log("strict check === ");
console.log("2" == 2); //true
console.log("2" === 2); //false









