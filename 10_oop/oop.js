// Object literal
const user = {
    userName: "amiksha",
    logInCount : 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${userName}`) error, this function running in different execution context does not have access 
        // to username

        console.log(`User Name: ${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
console.log(user.getUserDetails());

console.log(this); // global execution context
// Browser's global context must be checked

function User(username, age, salary){
    this.username = username;
    this.age = age;
    this.salary = salary;
    this.greetings = function (){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = User("Amiksha", 20, 50000);
const userTwo = User("Taksha", 22, 70000);

console.log(userOne); // became user2

const user1 = new User("Amiksha", 20, 50000);
const user2 = new User("Taksha", 22, 70000);
console.log(userOne);

console.log("Constructor Property.....");
console.log(user1.constructor); // [Function: User] is returned

console.log(user1 instanceof User);
console.log(user1 instanceof Object);