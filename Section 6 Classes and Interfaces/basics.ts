// Creating a First Class
// class User {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         // this.name = 'Max';
//         this.name = n;
//         this.age = a;
//     }
// }


// A Useful TypeScript Shortcut 

class User_1 {
    // Marking Fields as "readonly"
    public readonly hobbies: string[] = [];
    constructor(private name: string, public age: number) {

    }

    greet() {
        console.log('My name: ' + this.name);
    }
}

const max = new User_1('Max', 23);
const fred = new User_1('Fred', 29);

// max.hobbies = ['Sports']; // Error
max.age = 37;
// max.name = 'Toan'; // Error
console.log(max, fred);
