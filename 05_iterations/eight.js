//reduce()

const myNums = [1, 2, 3];
const myTotal = myNums.reduce ( function (acc, curr) {
    console.log(` acc : ${acc} , curr : ${curr}`);
    return acc + curr
}, 2) // => intial value of accumulator is zero
console.log(myTotal);

// define initial value of accumulator after call back which is used once , and return value of call will become new value of accumulator
/// curr will always have array elements
//
const myProduct = myNums.reduce ( function (acc, curr) {
    console.log(` acc : ${acc} , curr : ${curr}`);
    return acc * curr
}, 2)

console.log(myProduct);

// reduce() with arrow
const total = myNums.reduce( (acc, curr) => acc + curr, 0);
console.log(total);

const shoppingCart= [
    {
        item: "JS",
        price: 3000
    },
    {
        item: "Python",
        price: 999
    },
    {
        item: "Java",
        price: 4000
    },
    {
        title: "mobile development",
        price: 7000
    },
    {
        title: "Data science course",
        price: 12000
    }
]

// add all items of shopping cart
// curr will be object here
const cartTotal = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0 );
console.log(cartTotal);
