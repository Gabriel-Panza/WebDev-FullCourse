function randomNumberBetweenIntervals(min,max){
    const value = Math.random() * (max-min) + min;
    return Math.floor(value);
}

/*
let option = randomNumberBetweenIntervals(0,10), qnty = 0;
while(option!=0){
    option = randomNumberBetweenIntervals(0,10);
    qnty++;
}

console.log("The loop happenned "+ qnty + " times");
*/

let option, qnty=-1;
do{
    option = randomNumberBetweenIntervals(0,10);
    qnty++;
} while(option!=0)

console.log("The loop happenned "+ qnty + " times");