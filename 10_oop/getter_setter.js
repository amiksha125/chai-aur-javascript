class Bird{
    constructor(species,color,  canFly){
        this.species = species;
        this.color = color
        this.canFly = canFly;
    }

    // getter and setter control access of some variables eg; password

    get color(){
        return `${this._color} colored`.toUpperCase();
    }

    set color(color){
        this._color = color;
    }

}

// Use case: when color needs to returned in Upper Case
const eagle = new Bird("Bald Eagle", "Brown", true);
console.log(eagle.color);
