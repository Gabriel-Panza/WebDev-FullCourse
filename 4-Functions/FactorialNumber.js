function factorial(number){
    let factorialNumber=1;
    for (let i=2;i<number+1;i++){
        factorialNumber *= i;
    }
    return factorialNumber;
}

console.log(factorial(6));