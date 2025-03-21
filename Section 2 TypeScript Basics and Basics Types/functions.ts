
// Function Return Value Types

function add(a: number, b: number): number {
    return a + b;
}

// The "void" type
function log(messgae: string): void {
    console.log(messgae);
}


// The "never" type
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage); // crash the program so we use never type
}

// const logged = logAndThrow('Hi');


// Function as the Types

const logMsg = (msg: string) => {
    console.log(msg);
}

function performJob(cb: (msg: string) => void) {
    //...
    cb('Job done!');
}

performJob(logMsg);


type User = {
    name: string;
    age: number;
    greet: () => string; 
};

let user: User = {
    name: 'Max',
    age: 39,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}




