
const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// add 10 to each number
//map function creates a new array automatically by performing operation in callback
const newArrNums = myNumbers.map( (num) => num + 10);
console.log(newArrNums);

// if instead of num + 10, there is num > 5, then map evaluates this condition of makes array of boolean 

//Chaining
// we cam form of a chain of function applied on single array 
const newNums = myNumbers.map((num)  => num  * 10)
                         .map((num) => num + 1) // this map will take resultant array of previous map 
                         .filter((num) => num > 40) // this map will take resultant array of previous map 
                         
console.log(newNums);

