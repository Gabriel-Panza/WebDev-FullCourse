/*
Exchange values between a and b
*/

//Exchanging numbers
{
    let a = 15;
    let b = 20;
    console.log("The a value is: " + a);
    console.log("The b value is: " + b);

    let c = a
        a = b
        b = c
    // [a,b] = [b,a] also works
    console.log("After switching we have:")
    console.log("The a value is: " + a);
    console.log("The b value is: " + b);
}