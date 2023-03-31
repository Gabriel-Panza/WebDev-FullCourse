console.log("a = ", a); // undefined
var a = 2;
console.log("a = ", a); // 2

/*
bcs of the hoisting property that javascript has, the code above is 
equal to this:

var a;
console.log("a = ", a); // undefined
a = 2;
console.log("a = ", a); // 2

Hoisting only works with 'var' and consists in a default behavior of 
moving declarations to the top
*/