const notas = [6.8, 7.6, 8.7, 9.9];
console.log(notas[0], notas[3]);
console.log(notas[4]); // print undefined bcs it is empty

notas[4] = 10;
notas[10] = 5.5;

console.log(notas); // print all values inside the array
console.log(notas.length);

// Array supports all types of variables
notas.push({id: 3}, false, null, "test"); 
console.log(notas);

// pop removes the last item inside the array and delete removes an item from any index given
notas.pop();
delete notas[0];
console.log(notas);

console.log(typeof notas);