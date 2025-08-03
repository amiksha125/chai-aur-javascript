const coding = ["js", "java", "cpp", "ruby", "python"]
// coding.forEach(callback)

// callbacke functions do not have names
//// each array element is given as a parameter to callback of forEach

coding.forEach( function (item) {
    //console.log(item);
    
})
//arrow function with foreach
coding.forEach(
    (val) => {
        console.log(val)
    }
)

function printMe(item){
    console.log(item);
} 

const arr = [true, false, 1, "July", "12"];
arr.forEach(printMe);

arr.forEach( function (item, index, arrList) {
    console.log(item, index, arrList);
})

// for each with array of object
const myCoding = [
    {
        language: "javascript",
        extension: "js"
    },
    {
        language: "typescript",
        extension: "ts"
    },
    {
        language: "python",
        extension: "py"
    },
    {
        language: "C++",
        extension: "cpp"
    }
]
myCoding.forEach( (item) => {
    //item is object
    console.log(`${item.language} file with extenstion ${item.extension}`);

})