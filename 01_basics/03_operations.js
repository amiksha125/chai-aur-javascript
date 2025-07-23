let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello";
let str2 = " Amiksha";
console.log(str1 + str2);

console.log("1" + 2); //12
console.log(1 + "2");//12

console.log("1" + 2 + 2); //122
console.log(1 + "2" + 2);//122
console.log(1 + 2+ "2");//32
//above is not good practice in industry btw
//below shows just apply () to give your precedence
console.log((3 + 3) * 6 / 4);

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 6;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101
//explore more on mdn