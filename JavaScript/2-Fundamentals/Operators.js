/*
                Relational
    == means equal ---------------- (('1' == 1) gets true)
    === means strict equal -------- (('1' === 1) gets false)
    != means different ------------ (('1' != 1) gets false)
    !== means strict different ---- (('1' !== 1) gets true)
 */

// Operator Binary
function money(job1, job2)
{
    const buyIceCream = job1 || job2;      // or
    const buyTelevision = job1 && job2;   // and
    //const buyHouse = !!(job1 ^ job2);  // bitwise xor
    const buyHouse = job1 != job2;      // xor
    const keepHealthy = !buyIceCream;  // negation (Operator Unary)
    /*
        const a = 1
        const b = -a                // inverse (Operator Unary)
    */
    return { buyIceCream, buyTelevision, buyHouse, keepHealthy };
}

console.log(money(true, true));
console.log(money(true, false)); // == console.log(money(false, true));
console.log(money(false, false));

// Operator Ternary
const result = nota => nota>=7 ? "Aprovado" : "Reprovado";
console.log(result(8));
console.log(result(6));