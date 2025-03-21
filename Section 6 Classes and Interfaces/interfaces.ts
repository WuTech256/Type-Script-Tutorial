// Creating a Interface
interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

// Understading Declaration Merging
// interface Authenticatable {
//     role: string;
// }
// Interface as Object Types
let user: Authenticatable;
user = {
    email: 'test@example.com',
    password: 'abc1',
    // Understading Declaration Merging
    // role: 'main',
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    },
};


// Using Interface to Define Function Types
type SumFn = (a: number, b: number) => number; // function type
 
let sum: SumFn; // making sure sum can only store values of that function type
 
sum = (a, b) => a + b; // assigning a value that adheres to that function type

interface SumFn_1 {
    (a: number, b: number): number;
}

// Implementing Interface

class AuthenticatableUser implements Authenticatable {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
    ) {}

    login() {
        // ...
    }

    logout() {
        // ...
    }
}

// ...
function authenticate(user: AuthenticatableUser) {
    user.login();
    user.logout();
}


// Extending Interfaces
interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}
