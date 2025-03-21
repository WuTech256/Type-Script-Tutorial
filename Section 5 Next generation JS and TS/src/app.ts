// let age = 30;

// age = 29;
// var result;
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(result);

// Arrow Function
// const add = (a: number, b: number) => a + b;
// const add_1 = (a: number, b: number = 1) => a + b;
// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button')
// if(button) {
//     button.addEventListener('click', 
//         event => console.log(event)
//     );
// }
// console.log(add(2, 5));
// printOutput(add_1(4));

// The Spread Operator(...)
const hobbies = ['Sports', 'Cooking'];

const acctiveHobbies = ['Hiking'];

acctiveHobbies.push(...hobbies);

const person = {
    firstName: 'Max', 
    age: 30
};

const copiedPerson = { ...person };

// Rest Parameters

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult +  curValue;
    }, 0);
};


const addedNumbers = add(5, 10, 12, 12);
console.log(addedNumbers);


// Array & Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;

console.log(firstName, age, person);
