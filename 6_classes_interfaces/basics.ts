// Shortcut for defining a class with a constructor that automatically assigns parameters to public properties.
class User {
    public readonly hobbies: string[] = [];
    constructor(public name: string, private readonly age: number) {
       
    }

    greet(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}


const max = new User("Max", 36);
const fred = new User("Fred", 40);

console.log(max, fred);

// Doesn't work
// max.hobbies = ['Sports'];

// Work with push
max.hobbies.push('Sports');

