// This keyword
//with objects

const user = {
   username: "amiksha",
   price: 14000,
   welcomeMsg : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
    
   }
}

//user.welcomeMsg // no execution it refer to context
// user.welcomeMsg();
// user.username = "anshuja";
// console.log(this);

// user.welcomeMsg();
console.log(this); //{}

function chai(){
    const name = "sallu";
    console.log(this.name); //undefined
    
    console.log(this);  
}

chai(); // alotof data by this

//Arrow functions

const code = () => {
    console.log(this);
    
}

code(); //{} 

// const add = (num1 , num2) => {
//     return num1 + num2;
// }

//Implicit return
const add = (n1, n2) =>  (n1 + n2); 
// no need to write return it automatically returns
console.log(add(8, 9));

const returnObj = () => ( { age: 20} ); //wrap obj in {}
console.log(returnObj()); //returns obj 






