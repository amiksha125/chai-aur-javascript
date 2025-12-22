// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("amiksha", "amik@gmail.com", "123");
console.log(chai.encryptPassword());

console.log(chai.changeUserName());

// behind the scenes

function ser(username, email, password){
     this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const user1 = new User("anshuja", "anshu@gmail.com", "123");
console.log(encryptPassword());
console.log(changeUserName());

