// this depends on where they are located
const person = {
    speech: "Hello World!",
    speak() {
        console.log(this.speech);
    }
}

person.speak();

const speak1 = person.speak;
speak1();// paradigm conflict: Functional and O.O.P.
        // 'this' is not linked to person in this occasion

const speak2 = person.speak.bind(person);
speak2();// Using bind function, you can preserve the link between 'this' and 'person'

function personFunc() {
    this.age = 0;
    setInterval(function() {
        this.age++,
        console.log(this.age)
    }.bind(this), 1000)
}

new personFunc;

function personFunc2() {
    this.age = 0;
    const self = this;
    setInterval(function() {
        self.age++,
        console.log(self.age)
    }, 1000)
}

new personFunc2;

let compareThisFunction = function(param){
    console.log(this === param);
}

compareThisFunction(global); // true

const obj = {};
compareThisFunction = compareThisFunction.bind(obj);
compareThisFunction(obj); // true
compareThisFunction(global); // false

let compareThisArrowFunction = param => console.log(this === param);
compareThisArrowFunction(module.exports); // true
compareThisArrowFunction(global); // false