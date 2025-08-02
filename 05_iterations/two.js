// while

//initialization
let index = 1;
//while loop with condition
while( index <= 10){
    console.log(`Value of index is ${index}`)
    index = index + 2; //increment
}

let arr = ["flashman", "spderman", "shaktiman"];

let i = 0;
while(i < arr.length){
    console.log(`Value is ${arr[i]}`);
    i = i + 1;
}

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10); // score will not satify this
//but score is printed atleat once without checing condition.