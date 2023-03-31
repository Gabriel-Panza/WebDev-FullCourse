function getPrice(tax = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1-this.desc) * (1+tax)}`;
}

const prod = {
    name: "Computer",
    price: 4567,
    disc: 0.15,
    getPreco
}
console.log(prod.getPreco());

const car = {price: 4999, disc: 0.20};
console.log(getPrice.call(car)); // call(car, 0.15, "$")
console.log(getPrice.apply(car)); // apply(car, [0.15, "$"])