
//for of loop
//[{}, {}. {}]

const arr = [1,2,3,4,5];

for(const val of arr){
    console.log(val);
}
const greeting = 'Hello World!';
for(const ch of greeting){
    if(ch === ' ') continue;
    console.log(`Each char is ${ch}`);
}

//Maps 
//Used to hold key value pair , each key are unique, 
const map = new Map();
map.set('IN', "India");
map.set('US', 'United States');
map.set('Fr', "France");

console.log(map);
map.set('IN', "Ind");
console.log(map.keys());
//for of on map
for(const key of map){
    console.log(key); // it prints key with its value by default
}
// destructure key , value from object
for(const [key, value] of map){
    console.log(key + " :- "+ value);
}

const myObj = {
    'Game1': 'Spiderman',
    'Game2': 'NFA',
     'Game3': 'Mario'
}

for (const {key, value} of myObj) {
    console.log(key, value);
    
}