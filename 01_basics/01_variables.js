const accountId = 1234566;
let accountEmail = "amiksha@gmail.com";
var accountPass = 1207
accountCity = "bangloru";
let accountState;
// lets change values 
//accountId = 3; not allowed
//Above gives TypeError : assignment to constant variable
console.log(accountId); 

accountEmail = "ac@gmail.com"
accountPass = 1205
accountCity = "Hydrabad";

/* 
Prefer not to use var
because of block scope and function scope
If a variable is declared without value , then it is umdefined 
*/
console.table([accountId,accountEmail, accountPass, accountCity, accountState]); //change has occured


