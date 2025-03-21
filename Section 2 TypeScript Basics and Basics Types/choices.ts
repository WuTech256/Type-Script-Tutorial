// Working with Enums

// enum Role {
//     Admin = 1, // 1
//     Editor, // 2
//     Guest, // 3
// }

// let userRole: Role = Role.Admin;

// // ...

// userRole = Role.Guest;



// Being Specific With Literal Type
let userRole_1: 'admin' | 'editor' | 'guest' | 'reader' = 'admin';

// ...

userRole_1 = 'guest';


let possibleResults: [1 | -1, number]; // 1, -1

possibleResults = [1, -1];


// Types Aliases & Custom Types
type MyNumber = number;

type Role = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
    name: string;
    age: number;
    role: Role;
    permission: string[];
}
function access(role: 'admin' | 'editor' | 'guest' | 'reader') {
    // ...
 
}
function access_1(role: Role)
{
    // ...
}
