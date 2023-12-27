const person = {
    _value: 1,
    get value() { return this._value++ },
    set value(value){
        if (value > this._value){
            this._value = value;
        }
    }
}

console.log(person.value); // 1
person.value = 1000;
console.log(person.value); // 1000
person.value = 100;
console.log(person.value); // 1001