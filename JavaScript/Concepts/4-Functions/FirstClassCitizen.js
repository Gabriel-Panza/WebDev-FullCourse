// Function in JS is called First-Class Object (Citizens)
// High-Order Function

// literal form of a function
function func1() {}

// storage it in a variable
const func2 = function() {}

// storage it in an array
const array = [function (a,b) { return a + b}, fun1, fun2];
console.log(array[0](2,3));

// storage it in an attribute
const obj = {};
obj.speak = function () {return "Hello!"};
console.log(obj.speak());

// pass the function as a parameter
function run(func) {
    func();
}
run(function () { console.log("Running...") });

// returning/using a function inside other function
function add(a, b){
    return function (c){
        console.log(a+b+c);
    }
}
add(1,2)(3); // 1+2+3 = 6
const addResult = add(1,2); // 1+2 = 3
addResult(3); // 3+3