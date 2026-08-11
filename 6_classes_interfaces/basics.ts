// Shortcut for defining a class with a constructor that automatically assigns parameters to public properties.
class User {
    constructor(public name: string, public age: number) {
       
    }
}

const max = new User("Max", 36);
const fred = new User("Fred", 40);

console.log(max, fred);