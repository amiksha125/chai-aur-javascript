function User(email, password){
    this._email = email;
    this._password = password

    // function is also an Object
    
    //to define setter getter properties:
    Object.defineProperty(this, 'email', {
       get: function() { return this._email.toUpperCase() },
       set: function(value) { this.email = value; }
    })

    Object.defineProperty(this, 'password', {
       get: function() { return `${this._password}amikshaa` },
       set: function(value) { this.email = value; }
    })

}

const user1 = new User("amiksha@gmail.com", "123");
console.log(user1.email);
console.log(user1.password);

