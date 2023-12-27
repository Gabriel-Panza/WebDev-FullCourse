/* There are multiple ways of creating an object */
const obj1 = {}; // Literal Object
console.log(obj1);


const obj2 = new Object; // Object in JS
console.log(obj2);


function Product(name,price){ // Constructor func
    this.name = name,
    this.getPrice = () => {
        return price + " dollars";
    }
}
const obj3 = new Product("Pencil", 9.99); 
console.log(obj3.name);
console.log(obj3.getPrice());


function person(name,bornYear,actualYear) { // Factory func
    return{
        name,
        getAge(){
            return actualYear - bornYear + " years old";
        }
    }
}
const obj4 = new person("Gabriel", 2003, 2023);
console.log(obj4.name);
console.log(obj4.getAge());


const son = Object.create(null); // Object.create
son.name = "Gabriel";
son.age = 20;
console.log(son.name, son.age);


const fromJSON = JSON.parse('{"info": "Hi, my friends call me JSON"}') // Object from JSON
console.log(fromJSON.info)

/* Object.freeze(obj) will make the whole object a constant and you will not be able to change anything inside it */