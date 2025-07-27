//array

const array = [0, 1, 2, 3, 4, 5, 6];
const heros = ["shaktiman", "naagraj", "vman"];

const arr = new Array(2,3 ,5,6 );
console.log(arr[3]);

array.push(8);
array.push(9);
console.log(array);
console.log(array.pop());

arr.unshift(1);
console.log(arr);

arr.shift() //original is changing, shalllow copy
console.log(arr);

console.log(arr.includes(5));
console.log(arr.indexOf(5));

const newArr = array.join();
console.log(newArr);
console.log(typeof newArr);

//slice, splice
console.log("A ", array);
const myn1 = array.slice(1, 3);
console.log(myn1);
console.log("B ", array);
//splice
const myn2 = array.splice(1, 4); // start with index 1 copy 4 elements
// these 4 elements are actually removed from array , print below 
console.log("C ", array); // array is changed
console.log(myn2);

//slice does not change original array its non-destructive , while splice removes the portion of the array from original one
//its destructive. it copies elements (start index, no of elements to copy) and removes these from original
//while slice specifies a range of indices whose elements need to to copied , slice(start, end) end is exclusive








