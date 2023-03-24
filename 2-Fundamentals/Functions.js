// no-return Function
function printBasicOperations(a, b)
{
    console.log("Operands: " + a + ',' + b)
    console.log("Add: " + (a+b) + "\n" +
                "Subtract: " + (a-b) + "\n" +
                "Multiply: " + (a*b) + "\n" +
                "Divide: " + (a/b) + "\n");
}

printBasicOperations(4,2);
//printBasicOperations(3); // It will print NaN (not a number), bcs the other parameter is undefined


//return Function
function basicOperations(a, b = 0)
{
    console.log("Operands: " + a + ',' + b)
    return ("Add: " + (a+b) + "\n" +
            "Subtract: " + (a-b) + "\n" +
            "Multiply: " + (a*b) + "\n" +
            "Divide: " + (a/b) + "\n");
}

console.log(basicOperations(5,3));
//console.log(basicOperations(5)); // b=0, bcs of my definition in the parameters of the function


// Storage a function inside a variable
const printBasicOperationsVariable = function (a, b)
{
    console.log("Operands: " + a + ',' + b)
    console.log("Add: " + (a+b) + "\n" +
                "Subtract: " + (a-b) + "\n" +
                "Multiply: " + (a*b) + "\n" +
                "Divide: " + (a/b) + "\n");
}

printBasicOperationsVariable(4,2);


// Storage an arrow function inside a variable
const basicOperationsVariable = (a, b = 0) =>
{
    console.log("Operands: " + a + ',' + b)
    return ("Add: " + (a+b) + "\n" +
            "Subtract: " + (a-b) + "\n" +
            "Multiply: " + (a*b) + "\n" +
            "Divide: " + (a/b) + "\n");
}

console.log(basicOperations(5,3));


// implicit return in an arrow function
const multiply = (a, b) => a * b
console.log(multiply(5,2));

const message = a => console.log(a)
message("Hello World!");