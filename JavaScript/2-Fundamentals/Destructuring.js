const person = {
    myName: "Gabriel",
    age: 20,
    address: {
        street: "Very nice Street",
        number: 666
    }
}

const {myName, age} = person; // I create the variables with their respective values outside the scope
console.log(myName, age); // == console.log(person.myName, person.age);

const {myName: n, age: a} = person;
console.log(n, a);

const {address: {street, number, apt}} = person;
console.log(street, number, apt); // apt is not defined so it returns as undefined

const {surname = true, weight = false} = person;
console.log(surname, weight); // since I set a default value, instead of printing undefined, it prints the default value

const [x] = [10];
console.log(x);

const [n1, , n3, , n5, n6 = 0] = [2, 4, 6, 8];
console.log(n1,n3,n5,n6);

function rand([min = 0, max = 1000]) 
{
    if (min > max)
        [min, max] = [max,min];
    const randomValue = Math.random() * (max-min) + min;
    return Math.floor(randomValue);
}

console.log(rand([60,40])) // min = 60 and max = 40
console.log(rand([500])) // max = 1000
console.log(rand([,10])) // min = 0
console.log(rand([])) // min = 0 and max = 1000