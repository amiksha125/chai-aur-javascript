var c = 300;

if(true){
    let a = 20;
    const b = 5;
    var c = 30;
}

// console.log(a); error 
// console.log(b); error
console.log(c); //30 c is changed and also accessible outside the scope

//let solves them and saves us

var l = 100;

if(true){
   // l = 10; the l is chnaged to 10 for global scope also
   let l = 10;
    console.log("Inner l", l);
    
}

console.log("Outer l", l);
    
//Nested scopes

function one(){
    const name = "amiksha";

    function two(){
        const website = "Waste Detection";
        console.log(name);      
    }

    // console.log(website); error
    two();
    
}

one();

if(true){
    const mother = "pragati";

    if(mother === "pragati"){
        const lastname = " gajbhiye";
        console.log(mother + lastname);     
    }

    // console.log(lastname); error lastname is not defined
    
}

// console.log(mother); error not defined in the scope

//Function Expression

console.log(addOne(5));
function addOne(num){ //function is hoisted you can access it anywhere
    return num + 1;
}

console.log(addTwo(5)); //error
const addTwo = function(num){ //not hoisted
    return num + 2;
}





