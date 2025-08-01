//if statement
const userLoggedIn = true
if(userLoggedIn){
    console.log("Welcome to our website");
    
}

const temperature = 40;
if(temperature > 45){
    console.log("Its too hot today. Temperature exceeds 45");
    
} else {
    console.log("Temperature is below 45 degree");   
}

// >, < , <= ,>= , !=, ==, !==, === comparisons
console.log("Always executed ");

if(2 != 3){ //true
    console.log("2 is not equal to 3 without checking type");   
}

if(2 !== 3){ //true
    console.log("2 is not equal to 3 but their types are same");   
}

//scopes in control flow
const score = 200;
if(score > 100){
    var power = "fly"; // accessible everywhere
    let weapon = "sward"// only accessible inside if block

    console.log(`You won power : ${power} and weapon : ${weapon}`)
}
console.log(power , "This is globally scoped"); //power is not safe

// Short hand notation
//Implicit Scope

const balance = 1000;
if(balance > 500) console.log("you have enough..");

// else-if ladder
if(balance < 500){
    console.log("less then 500");
} else if(balance < 750){
    console.log("less than 750");  
} else if(balance < 900){
    console.log("less than 900");   
} else {
    console.log("less than 1200");   
}

const debitCard = true;
// Logical operator && - every things need to to be TRUE
if (userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy product");
}
// || - atleast one expression/ variable  should be true
const loggedInFromGoogle = false;
if(userLoggedIn || loggedInFromGoogle || 2 != 2){
    console.log("Its alright if you logged in from other browser"); //executed
}




