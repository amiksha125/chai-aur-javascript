//Object using constructor and singleton
const tinderUser = new Object();
console.log(tinderUser);
const user2 = {}; //same things
console.log(user2);


//add properties
tinderUser.id = "123abc";
tinderUser.name= "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

//Object inside Object
const regularUser = {
    email: "takshu@gmail.com",
    fullname : {
        user: {
        firtsName: "amiksha",
        middleName: "dilesh",
        lastname: "gajbhiye"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.user);
console.log(regularUser.fullname.user.lastname);

//optional chaining if give protection ig fullname does not exiost
// console.log(regularUser.fullname?.user.lastname);

//combine objects
const obj1 = {1 : "a", 2: "b"};
const obj2 = {3 : "a", 4: "b"};
const obj = { obj1, obj2}; // not recommended
console.log(obj);

//assign methods - rarely used
const obj4 = { 5 : "a", 6 : "b"};
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);
//Spread operator
const spreadObject = {...obj1, ...obj2, ...obj4};
console.log(spreadObject);

//array of objects
const users = [
    {
        email: "abc@12"
    }
];

console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('age'));

//explore more using prototype methods after logging obj at browser console












