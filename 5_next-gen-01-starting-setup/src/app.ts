/* const userName = 'Max';

let age = 30;
age = 31; */


// we can access to result outside of scope in JavaScript with var
/* function add(a: number, b: number){
    var result = a + b;
    return result;
}

console.log(result); */

// we can't access to result outside of scope in JavaScript with let
/* function add(a: number, b: number){
    let result = a + b;
    return result;
}

console.log(result); */



// 60. Arrow functions

// const add = (a: number, b: number = 1) => a + b;

// const printOutput:(a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');
// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

// 62. The Spread Operator (...)

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};


// 63. Rest parameters

const add = (...numbers: number[]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7, 8);
console.log();




// 64. Array & Object Destructuring

// senza destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// con destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {firstName: userName, age} = person;
console.log(userName, age);
