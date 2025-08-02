//for

//print 1 to 10 
for (let idx = 0; idx < 10; idx++) {
    const element = idx + 1;
    if (element == 5) {
        console.log(element, " is the best number");
    }
    console.log(element);
}

//console.log(element, idx); //not accesible

//print table with nested for loop
for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and outer loop ${i}`);
    console.log(i + '*' + j + '=' + i * j);
    
  }   
}

//for loop with array
const myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break; // get out of the loop
    }
    console.log(`Value of i is ${index}`);
} // control comes here

console.log("Out of the loop! as 5 is detected break terminated the loop");

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue; // skip this iteration and incerement index
    }
    console.log(`Value of i is ${index}`);
} 

console.log("Loop finished! 5 iteration is ignored and skipped by continue");
