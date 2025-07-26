const myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // a little readable

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

//to declare a specific date
let myCreatedDate = new Date(2025, 0, 13)
console.log(myCreatedDate.toDateString());

let myDateTime = new Date(2005, 6, 12, 7, 25);
console.log(myDateTime.toLocaleString());
let format1 = new Date("1996-11-23"); //yyyy-mm-dd
console.log(format1.toLocaleString());
let format2 = new Date("05-14-2000");//mm-dd-yyyy
console.log(format2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(format2.getTime());
console.log(format2.getTime() < myTimeStamp);

// time in seconds
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

console.log(newDate.getDay()); //6 th day means saturday

console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

newDate.toLocaleString('default', {
    weekday: "long"  
})

















