// Functions
// First-Class - treated like any other variable;
function add(a)

function add(a, b){
    return a + b;
}
function calculate(operation, firstOperand, secondOperand) {
    let result = operation(firstOperand, secondOperand);
    return result;
}

let sum = calculate(add, 10, 5);

console.log(sum);

//Higher-Order Functions - the ability to return a function as a result of other function.
let numbers = [1,2,3,4];

let multiplyByTwo = x => x * 2;

numbers.map(multiplyByTwo);

//Predicate - function that returns a bool (true/false);
let isValidName = function(name){
    if (name.split(' ').length == 2) {
        return true;
    }
    return false;
}
console.log(isValidName('Ivan Ivanov'));
console.log(isValidName('asd'));

//Built-in Higher Order Functions
-Array.prototype.map;
-Array.prototype.filter;
-Array.prototype.reduce;

//Pure functions - returns the same result given the same parameters
//it's execution desnt't depend on the state of the system

//Pure
let add = (a, b) => a + b;
//Impure
let impureFunction = function(text){
    return new Date() + text;
}
console.log(impureFunction('Ivo'));

//Referential Transparency
//Transparent - the function can be the value it represents
let add = (a, b) => a + b;
let mult = (a, b) => a * b;
let x = add(2, mult(3, 4));
let y = add(2, 12)
//Nontransparent
let add = (a, b) =>{
    console.log(a);
    return a + b;
}
let mult = (a, b) => a * b;
let x = add(2, mult(3, 4));
let y = add(2, 12)

//Currying

let sum3Curry = function(a){
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
let sum3b = sum3Curry(1);
let sum3c = sum3b(2);
let result = sum3c(3);

console.log(result);
console.log(sum3Curry(1)(2)(3));

//Partial application - some of the arguments are predefined
let pow = (y, x) => {
    return x ** y;
}
let sqr = pow.bind(null, 2);
console.log(sqr(2));
console.log(sqr(3));

//Imediately Invoked Function Expression IIFE
let value = (function(){
    return 2 * 10 + 15 + 'Pesho';
})();

console.log(value);

//Closure
function outerFunc() {
    let outerVar = 10;

    return function innerFunc() {
        return outerVar ;
    }
}

let returnedInnerFunction = outerFunc();
console.log(returnedInnerFunction());

//Throwing errors
function somethingBroken() {
    throw new Error('Something is broken!');
}

try {
    somethingBroken();
} catch (ex) {
    console.log(ex);
}