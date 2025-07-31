//Immediately Invoked Function Expression

//normal function
function chai(){
    console.log("DB connected");
    
}
//Things can get polluted from global scope in this way
chai();

//IIFE

(function connectDB(){
    console.log("DB Connected"); 
})(); // no need to cal this function its called when its created

( () => {
    console.log("DB connected twice");
    
}) ();
//It is mandatory to end IIFE with semi colon ;

( (name) => {
    console.log(`${name} , you ar connected`);
}) ('Amikshsa');