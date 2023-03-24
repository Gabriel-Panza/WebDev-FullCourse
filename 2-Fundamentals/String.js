const myName = "Gabriel";
const schools = "Iglesias,Pensi,Cambauba";

console.log(myName.charAt(0));
console.log(myName.charAt(6));
console.log(myName.charAt(7));
console.log(myName.charCodeAt(1)); // code of 'a' in the Unicode table

console.log(myName.indexOf('b'));
console.log(myName.substring(0,2));
console.log(myName.substring(2));

console.log(myName.replace('a','@')); // replace 'a' by '@'

console.log("Schools: ".concat(schools)); // == console.log("Schools: " + schools);
console.log(schools.split(',')); // transforms my string into an array with each element separated by the char ','