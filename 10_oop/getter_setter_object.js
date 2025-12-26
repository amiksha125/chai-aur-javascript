const User = {
    _email : 'amiksha@gmail.com',
    _password: 'abc@12',

    get email(){
        return this._email;
    },

    set email(email){
        this._email = email
    }

    // race situation occurs when _email is email, they compete with one another on stack
  
}

// user factory function Object.create

const person = Object.create(User)
console.log(person.email); // it internally calls get email() and fetch value of private member _email
