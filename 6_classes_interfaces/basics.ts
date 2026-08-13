// Shortcut for defining a class with a constructor that automatically assigns parameters to public properties.
class User {
    private hobbies: string[] = [];
    constructor(public name: string, protected age: number) {
       
    }

    greet(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const max = new User("Max", 36);
const fred = new User("Fred", 40);

console.log(max, fred);
