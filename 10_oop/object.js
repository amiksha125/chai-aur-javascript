function multiplyBy6(num){
    return num * 6;
}

// define property and value of function object

multiplyBy6.power = 2;

console.log(multiplyBy6(4));
console.log(multiplyBy6.power);
console.log(multiplyBy6.prototype);

function createUser(name, score){
    this.name = name;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score += 1;
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

// const user1 = createUser("Dev", 23);
// const user2 = createUser("Jiyu", 54); you cant access propertis without new keyword


const user1 = new createUser("Dev", 23);
const user2 = new createUser("Jiyu", 54);
console.log(createUser.prototype);
user1.increment();
user1.printMe();

/* what happens behind the scenes when the new keyward is used:

A new object is created: The new keyword initiates the creation of new JavaScript Object.

A prototype is linked: The newly created object gets linked to the prototype property 
of the constructor function. This means that it has access to properties and methods 
defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specifid 
arguments and this is bound to the newly created object. If no explicit return value 
is specified from the constructor, Javascript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called,
if it does not return a non-primitive value (object, array, function, etc.)
the newly created object is returned. */

