//go to browser console and type const arr = [2, 3, 5, 7] and then arr enter, prototype find all the array methods there
const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = [ "superman", "flash", "batman"];

marvel_heroes.push(dc_heroes)
//array ds wont merge , it is added as an element to marvel-> array of array
console.log(marvel_heroes);
console.log(marvel_heroes[3][2]);
//merge two arrays using concat but before that create new arrays , these t are modified one   
const marvel = ["thor", "ironman", "spiderman"];
const dc= [ "superman", "flash", "batman"];

console.log(marvel.concat(dc));

// Spread operator

const all = [...marvel, ...dc];
console.log(all);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = another_arr.flat(Infinity);
console.log(real_array);
// const depth2 = another_arr.flat(2);
// console.log(depth2);

console.log(Array.isArray("Amiksha"));
console.log(Array.from("amiksha"));
console.log(Array.from({name: "anshu"})); // [] 
//interesting study more , can we specify whether we want key or value as array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));












