const printCondition = function(grade){
    switch(Math.floor(grade)){
        case 10: case 9:
            console.log("Congratulations!!! Your grade was excellent!");
            break;
        case 8: case 7:
            console.log("Congratulations!!! You passed!");
            break;
        case 6: case 5: case 4:
            console.log("Looks like you are in a bad situation! You have one more chance at the final exam!");
            break;
        case 3: case 2: case 1:
            console.log("Thats bad! You didnt pass!");
            break;
        default:
            console.log("Invalid grade!");
            break;
    }
}

printCondition(9.5);
printCondition(7.5);
printCondition(4.9);
printCondition(2.7);
printCondition(-1);