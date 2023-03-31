function goodNews(grade)
{
    if(grade >= 7 && grade <= 10){
        console.log("Approved with " + grade + "!!!");
    }
    else if(grade < 7 && grade > 0){
        console.log("Disapproved with " + grade + "!!!");
    }
    else{
        console.log("Invalid grade!")
    }
}
goodNews(9);
goodNews(6);
goodNews(-1);

function OnlyTrue(value)
{
    if (value){
        console.log("Its true!!!");
    }
    else{
        console.log("Its false!!!");
    }
}
OnlyTrue();      // false
OnlyTrue(null); // false
OnlyTrue(' '); // true
OnlyTrue(-1); // true