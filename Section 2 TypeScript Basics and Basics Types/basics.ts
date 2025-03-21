
// Type inference
// explicti assignment
let userName: string; // number or boolean

// Type Assignment
let userAge = 38; // match with number
// ...

userName = 'Max';
// userAge = '34'; // error


// Assigment Type to Parameter
function add(a: number, b = 5) {
    return a + b;
}

add(10);
// add("10");
add(10, 6);
// add(10, '6');
