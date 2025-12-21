// call leyword

function setUsername(username){
    this.username = username;
    console.log("called ");
    
}

function createUser(username, email, password){
    //setUsername(username) this func is not called.. use call

    //this.username = setUsername.call(username) // the setUser func do nt have access access to this username it returns the value
    //store itin this.username, I will die after execution but my assets will be returned before my death.
   // this.username = setUsername.call(username) I invented this i guess

   setUsername.call(this, username)

    this.password = password;
    this.email = email;
}

const user1 = new createUser("amiksha", "amiksha@gmail.com", "123@am");

console.log(user1);
