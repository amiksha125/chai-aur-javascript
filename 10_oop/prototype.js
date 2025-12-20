let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.amiksha = function(){
    console.log(`Amiksha is present in all object.`);
    
}

heroPower.amiksha();

//array is alro converted to backend , so it should have amiksha function as property
// let us check

let myheros = [ "thor", "spderman"];
myheros.amiksha(); // yes present 

// To provide property only to arrays use
Array.prototype.heyAmiksha = function(){
    console.log("present only in arrays, power only to arrays");
    
}

myheros.heyAmiksha(); // yess
//heroPower.heyAmiksha(); // not present error

// imheritance

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS Assignment',
    fullTime:  true,
    __proto__ : TeachingSupport
}

//Teacher.__proto__ = TeachingSupport; // throufh Teacher obj properties of TASupport can be accessed.
// This is called prototypcal inheritance

// Now come to Modern Syntax
//Object.setPrototypeOf("assign access to this object", "give access of this object")

Object.setPrototypeOf(TeachingSupport, Teacher)

// Task , We want string to have property called true length 
// that return the length of string ignoring tail whitespaces

let myname = "amiksha  ";
let mydream = "Microsoft  ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)  
}

myname.trueLength();
mydream.trueLength();
