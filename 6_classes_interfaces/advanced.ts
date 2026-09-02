class User {
    constructor(private firstName: string, private lastName: string) {}
    get fullName(){
            return this.firstName + " " + this.lastName;
    }
}

const max = new User('Max', 'Schwarz');
console.log(max.fullName); // Max Schwarz