class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);     
    }

    // assign an id whenever a new user is created
    static createId(){
        return `123`;
    }
}

const user1 = new User('amiksha');
// A situation comes when you do not have to give access of createId to every object that is instatiated from User class.
// make createId static
//console.log(user1.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const anshu = new Teacher("Anshu", "anshu@gmail.com");
anshu.logMe();

console.log(anshu.createId());
