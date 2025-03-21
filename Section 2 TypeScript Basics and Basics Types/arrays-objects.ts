// Arrays & Types

let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10); // Error

// let users: (string | number) [];
// Alternative Array Type Declaration
let users: Array<string | number>;
users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];

// Making sense of Tuples
let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];   //Error


// Object Types
let user: {
    name: string;
    age: number | string;
    hobbies: string[];

    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Max',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 5
    }
};

// Tricky: The "Must Not Be Null" Type

let val: {} = 'is a value';

// let val: {} = null; // Error
// let val: {} = undefined; // Error

// Flexible Objects with the Record Type
// Maybe same {key, values}
let data: Record<string, number | string>;
data  = {
    entry1: 1,
    entry2: 'some string'
};
