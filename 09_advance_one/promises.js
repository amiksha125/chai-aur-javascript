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
        let error = false;
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
    
})
