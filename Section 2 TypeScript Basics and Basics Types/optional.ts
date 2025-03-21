// Optional Values & TypeScript
// function generateError(msg?: string) {
//     throw new Error(msg);
// }



// generateError();

type User = {
    name: string,
    age: number,
    role?: 'admin' | 'guest',
};

// Nullish Coalescing

let input = '';
const didProvideInput = input || false; // false
console.log(didProvideInput);
const didProvideInput_1 = input ?? false; // empty string
console.log(didProvideInput_1);
