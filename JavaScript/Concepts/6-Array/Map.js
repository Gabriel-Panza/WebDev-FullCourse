const numbers = [1,2,3,4,5];

let result = numbers.map(e => e*2);

console.log(numbers);
console.log(result);

const add = e => e+10;
const mult = e => e*5;
const transformToDollar = e => `$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = numbers.map(add).map(mult).map(transformToDollar);
console.log(result);

//map with JSON
const cart = [
    '{ "name": "Eraser", "price": 2.99}',
    '{ "name": "Pencil", "price": 1.99}',
    '{ "name": "Pen", "price": 1.98}',
    '{ "name": "Notebook", "price": 10.99}'
]

const convert = e => JSON.parse(e);
const onlyPrice = e => e.price;
result = cart.map(convert).map(onlyPrice);
console.log(result);