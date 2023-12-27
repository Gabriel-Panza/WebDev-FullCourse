const obj1 = Object.preventExtensions({
    name: "obj1",
    shape: "Square",
    area: "5m²"
})
obj1.tag = "Object"; // cant add
delete obj1.area; // can delete
obj1.shape = "Circle" // can modify
console.log(obj1);


const obj2 ={
    name: "obj2",
    shape: "Circle",
    area: "5m²"
}
Object.seal(obj2);
obj2.tag = "Object"; // cant add
delete obj2.area; // cant delete
obj2.shape = "Square" // can modify
console.log(obj2);


const obj3 ={
    name: "obj3",
    shape: "Rectangle",
    area: "5m²"
}
Object.freeze(obj3);
obj3.tag = "Object"; // cant add
delete obj3.area; // cant delete
obj3.shape = "Triangle" // cant modify
console.log(obj3);