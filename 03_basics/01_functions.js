function sayMyname(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");   
     
}

//sayMyname; //no error, its a reference of function

//sayMyname(); calling a function

function addTwoNuumbers(num1, num2){ // num1, num2 are parameters
    //console.log(num1 + num2);
    return num1 + num2;
    console.log("hey"); //stmnts after return never executes
    
}
addTwoNuumbers(4, 8);
addTwoNuumbers("a", 7);
addTwoNuumbers(9, null); //these are arguments

//storing result in variable by return statement
const res = addTwoNuumbers(8, 9);
console.log(res);

function loginUser(userName){
    return `${userName} just logged in..`;
}

function loginUserHandledErr(userName){
    // if(userName === undefined){
    //     return "Please enter a user name";
    // } or

    if(!userName){ //react nature
         return "Please enter a user name";
    }
    return `${userName} just logged in..`;
}

function loginUserDefaultName(name = "admin"){
    return `${name}, I know you logged In..`
}

console.log(loginUser("")); 
console.log(loginUser()); //undefined, just logged in.. (very important)

console.log(loginUserHandledErr());
console.log(loginUserDefaultName()); // default value is set, name will never be undefined
console.log(loginUserDefaultName("Veena")); //override default value

//rest operator
function calculateCartPrice(...num1){
    return num1;
}

//consume some values 
function calculateCartPriceRemaining(val1, val2, ...num){
    return num;
}

console.log(calculateCartPrice(200, 400, 500, 1000));
console.log(calculateCartPriceRemaining(200, 400, 500, 1000));

//passing object to function
const user = {
    username: "amiksha",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user);
handleObject({
    username: "Ruhi",
    price: 100
})

//passing array to function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getarray){
  return getarray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([23, 55, 67, 8]));
