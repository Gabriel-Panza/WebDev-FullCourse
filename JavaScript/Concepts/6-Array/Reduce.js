const students = [
    { name: "Gabriel", grade: 6.3, scholar: false },
    { name: "Joh", grade: 8.7, scholar: true },
    { name: "Amanda", grade: 6.6, scholar: false },
    { name: "Camila", grade: 8.4, scholar: true }
]

const grades = a => a.grade;
let averageGrade = students.map(grades).reduce(function(first,second) { 
    return first + second 
}, 0) / students.length; // reduce do something parameter by parameter starting with the initial value (in this case, initial value = 0)
console.log(averageGrade);

const scholars = a => a.scholar;
const allScholar = (result, scholar) => result && scholar;
console.log(students.map(scholars).reduce(allScholar));
const anyScholar = (result, scholar) => result || scholar;
console.log(students.map(scholars).reduce(anyScholar));