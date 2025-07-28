//Object literals


//symbol decxlaration
const sym = Symbol("mykey1");
const JsUser = {
    name: "Amiksha",
    age : 20,
    level: "basic",
    favourite: "Objects, Event loops",
    lastKiginDays: ["Mon", "Wed", "Thurs", "Sat"],
    "full-name": "amiksha gajbhiye",

    [sym] : "myvalue1"
}

//Ways to access object
console.log(JsUser.name);
console.log(JsUser["name"]); // This is better
// cant access full-name with . operator
console.log(JsUser["full-name"]);

console.log(JsUser[sym]);

//change the value
JsUser.level = "intermediate";

//freeze to unable chnaging object
// Object.freeze(JsUser);
// JsUser.level = "basic"; // sorry no change, no error
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello user!!");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello , ${this.name}`);
    
}

console.log(JsUser.greeting); // returns a reference of function
console.log(JsUser.greeting()); // executes functions

console.log(JsUser.greetingTwo());




