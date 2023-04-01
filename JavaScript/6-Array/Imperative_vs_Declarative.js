const students = [
    { name: "Gabriel", grade: 6.3, scholar: false },
    { name: "Joh", grade: 8.7, scholar: true },
    { name: "Amanda", grade: 6.6, scholar: false },
    { name: "Camila", grade: 8.4, scholar: true }
]

// Imperative -> Its best when you want to explain to someone
let total1 = 0;
for (let i = 0; i<students.length; i++){
    total1 += students[i].grade;
}
console.log(total1);

// Declarative -> Its best when you want to optimize your code
const grades = a => a.grade;
const add = (total, grade) => total + grade;
const total2 = students.map(grades).reduce(add);
console.log(total2);