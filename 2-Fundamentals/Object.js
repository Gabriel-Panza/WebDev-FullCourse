const products1 = {};
products1.name = "Iphone";
products1.price = 5000;
console.log(products1);

const products2 = {
    name: "Samsung S20",
    price: 2000
};
console.log(products2);

// I can have an object inside other object
const products3 = {
    name: "lala1",
    obj: {
        name: "lala2",
        obj: {
            name: "lala3"
        }
    }
};
console.log(products3);

// Example of Json (javascript object notation) which is different from object
'{"name": "Nokia", "price": 500}'
