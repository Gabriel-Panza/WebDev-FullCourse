const companies = ["Apple","Microsoft","Sony"];

function print(name,index){
    console.log(`${index+1}. ${name}`);
}
companies.forEach(print);

let index = 1;
companies.forEach(fabricante => console.log(`${index++}. ${fabricante}`));


const grades = [7.0,8.0,9.0,6.0,4.0,5.0];
const lowGrades = grade => grade>7;
const filterGrades = grades.filter(lowGrades);

console.log(filterGrades);