const userName = 'Max';

let age = 30;
age = 31;


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

const add = (a: number, b: number) => a + b;

const printOutput:(a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');
if(button){
    button.addEventListener('click', event => console.log(event));
}
button

printOutput(add(2, 5));
