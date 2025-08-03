const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by app"
}

// For in loop is used to iterate object

for (const key in myObj) {
    console.log(` ${key} shortcut is for ${myObj[key]}`);
    // key => to access key, and myObj[key] => to access value   
}

const programming = ["js", "rb", "py", "java", "cpp"]
//for in loop with array
for(const key in programming){
    //console.log(key); // prints index/key
    //console.log(programming[key]); // prints values
}

//For in with map ??
const map = new Map();
map.set('IN', "India");
map.set('US', 'United States');
map.set('Fr', "France");

for(const key in map){
    console.log(key); // nothing is printed
}