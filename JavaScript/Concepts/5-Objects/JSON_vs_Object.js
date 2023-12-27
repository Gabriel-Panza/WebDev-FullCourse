const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a+b+c;
    }
}
// transforms an Object into a JSON
console.log(JSON.stringify(obj)); // the function will be erased bcs JSON is a text-based structure and doesnt support functions
// transforms a JSON into an Object
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": [], "e": {} }')); // JSON supports almost every structure in JS