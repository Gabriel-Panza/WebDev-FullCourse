const weight1 = 1.0;
const weight2 = Number("2.0");

console.log(weight1,weight2);
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));

const grade1 = 9.14;
const grade2 = 7.87;

const totalGrade = grade1 * weight1 + grade2 * weight2;
const totalWeight = weight1 + weight2;
const finalGrade = totalGrade/totalWeight;

console.log(finalGrade.toFixed(2)); // == console.log(finalGrade) with only 2 decimal cases
console.log(finalGrade.toString()); // == console.log(finalGrade) bcs it is a number
console.log(finalGrade.toString(2)); // == binary version of the finalGrade number
console.log(typeof finalGrade); // type of the variable
console.log(typeof Number); // type of the function Number