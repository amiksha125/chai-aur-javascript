class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User name is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, subject, salary){
        super(username);
        this.salary = salary;
        this.subject = subject
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const teacher = new Teacher("Sheenu", "Java", 29000);
teacher.addCourses();

const user = new User("shonu");
//user.addCourses(); // user cannot access teacher's prop

user.logMe();
teacher.logMe();

console.log(user == teacher);
console.log(teacher instanceof User);

