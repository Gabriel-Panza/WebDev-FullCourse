// Basics of prototype
{
    const ferrari = {
        modelo: "F40",
        maxSpeed: 324
    }
    const volvo = {
        modelo: "V40",
        maxSpeed: 240
    }

    console.log(ferrari.__proto__); // {}
    console.log(ferrari.__proto__ === Object.prototype); // true
    console.log(volvo.__proto__ === Object.prototype); // true
    console.log(Object.prototype.__proto__ === null); // true
}

// prototype using constructor func
{
    function MyObject() {}
    console.log(typeof Object === typeof MyObject); // true
    console.log(Object.prototype, MyObject.prototype); // {} {}

    const obj1 = new MyObject();
    console.log(MyObject.prototype === obj1.__proto__); // true
    MyObject.prototype.name = "Unknown";
    MyObject.prototype.speak = function(){
        console.log(`Hello, my name is ${this.name}`);
    }

    obj1.speak(); // name = Unknown
    obj1.name = "John";
    obj1.speak(); // name = John

    const obj2 = {};
    obj2.__proto__ = MyObject.prototype; // obj2 now have the "name" and "speak" atributes
    obj2.name = "James";
    obj2.speak(); // name = James
}

// prototype chain
{    
    const grandFather = {nameGrandFather: "Paulo"};
    const father = {__proto__: grandFather, nameFather: "André"};
    const son = {__proto__: father, nameSon: "Gabriel"};
    console.log(son.nameGrandFather, son.nameFather, son.nameSon)
    
    const car = {
        actualSpeed: 0,
        maxSpeed: 200,
        accelerate(delta){
            if(this.actualSpeed + delta <= this.maxSpeed)
            this.actualSpeed += delta;
            else
            this.actualSpeed = this.maxSpeed;
        },
        status(){
            return `${this.actualSpeed}km/h of ${this.maxSpeed}km/h`;
        }
    }
    const ferrari = {
        modelo: "F40",
        maxSpeed: 324
    }
    const volvo = {
        modelo: "V40",
        maxSpeed: 240
    }
    Object.setPrototypeOf(ferrari,car);
    Object.setPrototypeOf(volvo,car);
    
    ferrari.accelerate(300);
    console.log(ferrari.status());
    volvo.accelerate(100);
    console.log(volvo.status());
    
}

// prototype using Object.create
{
    const father = {name: "Pedro", hairColor: "Black"};
    const daughter1 = Object.create(father);
    daughter1.name = "Ana"
    console.log(daughter1.name, daughter1.hairColor);

    const daughter2 = Object.create(father,{
        name: {value: "Bia", writable: false, enumerable: true}
    });
    daughter2.name = "Nina" // no change, bcs it is not writable
    console.log(daughter2.name, daughter2.hairColor);

    for (let key in daughter1){
        daughter1.hasOwnProperty(key) ? // if else
        console.log(key) : console.log(`Por herança: ${key}`)
    }
    for (let key in daughter2){
        daughter2.hasOwnProperty(key) ? // if else
        console.log(key) : console.log(`Por herança: ${key}`)
    }
}

// Adding methods to functions using prototype
{
    String.prototype.reverse = function(){
        return this.split('').reverse().join('');
    }
    console.log("Hello World".reverse()); // dlroW olleH

    String.prototype.toString = function(){ // be careful when rewriting a function with prototype, bcs it can generate problems
        return "Coding"
    }
    console.log("Hello World".reverse());  // gnidoC
}