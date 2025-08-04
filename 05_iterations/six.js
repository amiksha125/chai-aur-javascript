// filter, map and reduce

// forEach() does not return anything
const coding = ["js", "java", "cpp", "ruby", "python"]
const values = coding.forEach( (item) => {
    return item;
})

console.log(values);// undefined
//filter function returns an new array after applying filter condition in callback
const myNums = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
// Implicit return
const newNums = myNums.filter( (num) => num > 4);
console.log(newNums);
const newNums2 = myNums.filter( (num ) => {
    // num % 2 == 0 , newNums2 is []
    return num % 2 == 1;// always use return when using {}
})

console.log(newNums2);
// same can be achieved with filter but some more line of code
const newForEachNums = [];
myNums.forEach( (num) => {
if( num > 4){
    newForEachNums.push(num)
}
})

const books = [
  { title: "The Silent Forest", genre: "Mystery", publish: 2012, edition: "1st" },
  { title: "Dream Chasers", genre: "Fantasy", publish: 2015, edition: "2nd" },
  { title: "Code Masters", genre: "Technology", publish: 2018, edition: "3rd" },
  { title: "Lost in Time", genre: "Science Fiction", publish: 2010, edition: "1st" },
  { title: "Healing Hearts", genre: "Romance", publish: 2020, edition: "2nd" },
  { title: "War of Words", genre: "History", publish: 2005, edition: "4th" },
  { title: "The Art of Zen", genre: "Philosophy", publish: 2011, edition: "1st" },
  { title: "Cooking 101", genre: "Cooking", publish: 2016, edition: "2nd" },
  { title: "Under the Stars", genre: "Poetry", publish: 2013, edition: "1st" },
  { title: "Game On!", genre: "Technology", publish: 2019, edition: "1st" }
];

//I want all the books of genre Technology
console.log("books of genre Technology");
const userBooksTechnology = books.filter( (bk) => bk.genre === 'Technology');
console.log(userBooksTechnology);

// I want all the books that publish after 2015
console.log("books that publish after 2015");
const userBooksPublish = books.filter( (book) => book.publish > 2015);
console.log(userBooksPublish);

// I want book with genre romance , published after 2013
console.log("book with genre romance , published after 2013");

const userBookRomance = books.filter( (book) => {
    return book.genre == "Romance" && book.publish > 2013;
})
console.log(userBookRomance);
