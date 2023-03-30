//Closure allows a function to access and manipulate external variables
const x = "Global";

function printX(){
    return x;
}

function callFunc(){
    const x = "Local";
    return printX();
}
console.log(callFunc()) // "Global"


function fora(){
    const x = "Local";
    function dentro(){
        return x;
    }
    return dentro;
}
const myFunction = fora();
console.log(myFunction()); // "Local"