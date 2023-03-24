// Example of normal String:
const randomName = "Alice";
const message = "Olá " + randomName + '!';

// Example of Template String:
const template = `

    Olá ${randomName}
`;

console.log(message,template);

// Expressions
console.log(`1+1 = ${1+1}`);

const up = text => text.toUpperCase()
console.log(`Hey... ${up("watch out")}`);