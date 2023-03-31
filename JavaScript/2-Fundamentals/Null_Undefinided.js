const a = {name: "TestA"};
console.log(a);

const b = a; // I do not copied the value inside (a). I copied the same memory address. That happens bcs we are working with objects
b.name = "TestB";
console.log(a); // (a) also changed bcs (a) and (b) have the same memory address.

/*
            IMPORTANT
    when working with some types 
    of variables, like objects or 
    functions, and we try to copy 
    their values, we need to pay 
    attention bcs the code will 
    start to see this copy as a 
    reference instead of a value
*/

let value1; // declared but not initialized
console.log(value1); // it will print 'undefinied', bcs we didnt initialize it
//console.log(value2); // it will give an error and print 'it is not defined', bcs we didnt declare it

let value2 = null; // declared and initialized
console.log(value2); // It will print null. We use null when we want to reset the value of a variable
//console.log(value2.toString()); // it will give an error and print 'cannot acces property 'toString' of null', bcs null dont have any properties

/*
            IMPORTANT
    when trying to reset a value 
    try to use null instead of 
    undefinided. Both ways work,
    but setting something to null
    is more accurate and well seen.
*/