const userName = 'Max';

// Expect `string`
console.log(typeof userName);

type UserName = typeof userName;

// Expect `string`
console.log(typeof userName);

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
};

type Setttings = typeof settings;
function loadData(settings: Setttings) {
    //...
}

loadData(settings)

function sum(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

type sumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: sumFn | SubtractFn) {
    //  some code...
}


