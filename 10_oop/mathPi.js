
// Ques: Can you change the value of global constant Math.PI to 4 ?

console.log(Math.PI);
Math.PI = 4;
console.log(Math.PI);

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Create your own object and try make its properties fixed 

const chai = {
    name: "Ginger masala",
    price: 150,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi bani");
    }
}

let descriptor = Object.getOwnPropertyDescriptor(chai, "name");
console.log(descriptor);

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//let us iterate object

for(let [key, value] of Object.entries(chai)){
    if(typeof value != "function"){
        console.log(`${key} : ${value}`); //name is not printed 
    }
}

//search for object iteration property 