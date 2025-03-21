// Making Sense of Index Types

type DataStore = {
    [prop: string]: number | boolean | string;
}

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;

store.name = 'Max'

// Constant Types with "as const"

let roles = ['admin', 'guest', 'editor'] as const; // readonly tuple
// roles.push('max'); // error
const roles1 = ['toan'];
let role2 = ['a'];
const firtRole = roles[0];
roles1[0] = 'hi';
// roles[0] = 'hi'; // Error


// Revisiting the "Record" Type

let someObj_1: Record<string, number | boolean>;
someObj_1.hi = true;

// Check value
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

