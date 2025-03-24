let names: Array<string> = ['toan', 'quynh'];

// let names1: string[] = ['toan', 'quynh'];

// Generic Type 
type DataStore<T> = {
    [key: string]: T
};


let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;


let nameStore: DataStore<string> = {};


// Generic Functions and Inference
function merge<T, U>(a: T, b: U) {
    return [a, b]; 
}

const ids = merge<number, string>(1, 'Max');

// Generics and Constraints
function mergeObj <T extends object, U extends object>(a: T, b: U) {
    return {...a, ...b};
}

const merged = mergeObj({userName: 'Max'}, {age: 35});
console.log(merged);


// Working with Generic Classes & Interfaces
class User<T> {
    constructor(public id: T) {}
}

const user = new User('i1');
user.id;
