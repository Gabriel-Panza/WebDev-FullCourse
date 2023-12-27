/*
let i = 0;                      // 1
while (i<10){                  // 2
    console.log("i = " + i);
    i++;                     // 3
}
*/

for (let i=0; i<10; i++){ // 1 // 2 // 3
    console.log("i = " + i);
}

const grades = [6.6, 7.5, 8.7, 9.9, 5.8]
for (let i=0; i<grades.length; i++){
    console.log(`grade ${i} = ${grades[i]}`);
}
for (let i in grades){
    console.log(`grade ${i} = ${grades[i]}`);
}

const person = {
    name: "gabriel",
    age: 20,
    weight: 72
}
for (element in person){
    console.log(`${element} = ${person[element]}`);
}