// name_value
const welcome = "Hello!" // Lexical context 1

function exe() 
{
    const welcome = "Hello again!" // Lexical context 2
    return welcome;
}

// Objects are groups of name_value
const Client = {
    name: "Gabriel",
    age: 20,
    weight: 72,
    address: {
        street: "Very nice Street",
        number: 666
    }
}

console.log(welcome);
console.log(exe());
console.log(Client);