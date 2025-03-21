// class User {
//     constructor(private firstName: string, private lastName: string) {

//     }
//     // Understanding Getters
//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }


// const toan = new User('Toan', 'Vu');
// console.log(toan.fullName);


class User_2 {
    protected _firstName: string = '';
    private _lastName: string = '';
    // Setting Value with Setters
    set firstName(name: string) {
        if(name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if(name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    // Exploring Static Properties and Method
    static eid = 'USER';
    static greet() {
        console.log('Hello!');
    }
}
console.log(User_2.eid);
User_2.greet();


const toanvu = new User_2();
toanvu.firstName = 'Toan';
toanvu.lastName = 'Vu';

console.log(toanvu.firstName);


// Understading Inheritance

class Employee extends User_2 {
    constructor(public jobTitle: string) {
        super(); // Call constructor of User_2
        // super.firstName = 'Max';
    }

    work() {
        // ...
        // Use The "protected" Modifier
        console.log(this._firstName);
        // super._lastName;
    }
}

// Making Sense of Abstract Classes
abstract class UIElement {
    constructor(public identifier: string) {}

    clone(targetLocation: string) {
        // logic to duplicate the UI element
    }
}


// let UIElement = new UIElement(); // ERROR

class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }

    // ... 
    
}
