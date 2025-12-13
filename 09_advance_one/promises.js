const promiseOne = new Promise(function(resolve, reject){
    //Do async operation like DB calls, networking
    setTimeout(function(){
     console.log('Async task is completed')
     resolve(); // connects this task with then();
    }, 1000)

})

promiseOne.then(function(){
    console.log('Promise consumed');
})

//Combined part
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})

//Passing data from promise and accepting at .then() with resolve( {} )
const promiseThree = new Promise((resolve, reject) =>{
   setTimeout(function(){
    resolve({username: "amiksha", email: "pragati@gmail.com"})
   }, 1000)
})

promiseThree.then(function(user) {
   console.log(user);
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        //if true then catch() will consume promise
        if(!error){
            resolve({username: "anshuja", email: "anshubham@gmail.com"});
        } else {
            reject('Error, Something went wrong!') //value passed to .catch(callback)
        }
    }, 1000)
})

console.log("Chaining of promise, return value of then passed to next then");

//Promise chaining
const username = promisefour.then((obj) => {
    console.log("Chaining of promise, return value of then passed to next then");
    console.log(obj);
    return obj.username;
}).then((username) =>{
    console.log(username); 
}).catch(function(error){
    console.log(error);  
}).finally(() => console.log("Promise is either resolved or rejected.")
);


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        //if true then catch() will consume promise
        if(!error){
            resolve({username: "amiksha", passcode: "232"});
        } else {
            reject('Error, JS went wrong!') //value passed to .catch(callback)
        }
    }, 1000)
})

async function consumePromise() {
    try {
        const response = await promisefive;
    // throws error and stops when erroe is true unlinke .then
    // better to wrap in try-catch
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
console.log("Promise 5 Now: async await"); // look where it is printed in op
consumePromise();


// json data for posts - https://jsonplaceholder.typicode.com/users
// try to fetch 👇

async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // the response came now is a string raw data convert t to json with json() for readability
    // ⚠️json() will take time add await before it
    const data = await response.json();
    console.log(data);
    
}

getAllUsers();

// do same with .then .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
  console.log(data);
  
})
.catch((error)=> console.log(error))