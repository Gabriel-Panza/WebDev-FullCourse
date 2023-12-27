const person = {
    name: "Gabriel",
    age: 20,
    weight: 73
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})
Object.entries(person).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(person, 'bornDate', {
    enumerable: true,
    writable: false,
    value: "01/15/2003"
})

person.bornDate = "01/15/2000"; // not writable
console.log(person);

const dest = {a:4};
const o1 = {b:2};
const o2 = {c:3, a:1};
const objResult = Object.assign(dest, o1, o2);

Object.freeze(objResult);
objResult.c = 5; // no change, bcs objResult is frozen

console.log(objResult)