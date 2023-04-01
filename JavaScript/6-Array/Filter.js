const cart = [
    { name: "Eraser", price: 2.99, fragile: false },
    { name: "Pencil", price: 1.99, fragile: true },
    { name: "Pen", price: 1.98, fragile: true },
    { name: "Notebook", price: 10.99, fragile: true }
]

let cartFilter = cart.filter(p => p.price>2);
console.log(cartFilter);

const expensive = p => p.price>2;
const fragile = p => p.fragile;
cartFilter = cart.filter(expensive).filter(fragile);
console.log(cartFilter);