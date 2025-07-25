let name = "amiksha";
let repoCount = 34;

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${++repoCount}`);

const gameName = new String('TicTacToe');
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('o'));

//slice & substring
const newStr = gameName.substring(0, 5);
console.log(newStr);

const newSlice = gameName.slice(-5, 6);
console.log(newSlice);

//trim & replace
const spaceStr = "      anshu      ";
console.log(spaceStr);
console.log(spaceStr.trimStart())
console.log(spaceStr.trim());

const url = "https://amiksha.com/amiksha%20gajbhiye";
console.log(url.replace('%20', '-'))


//includes & split()
console.log(url.includes("sundar"));
console.log(url.lastIndexOf('a'));

const splitStr = new String('mummy-papa-tai');
console.log(splitStr.split('-'));

//explore more and use backtic








