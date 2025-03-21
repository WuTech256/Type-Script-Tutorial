// Inferred null & A First Look At Type Narrowing

// const inputEl = document.getElementById('user-name');

// if(!inputEl) {
//     throw new Error('Element not found!');
// }
// console.log(inputEl?.value);


// Forced "Not Null" And Optional Chaining

// ! to ignore if inputEl_1 is NULL
// const inputEl_1 = document.getElementById('user-name')!;
// console.log(inputEl_1?.value);


// Type Casting
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;
console.log(inputEl?.value);
