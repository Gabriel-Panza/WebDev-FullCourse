const oddNumbers = [1,3,5,7,9,11,13,15];

console.log("Example of Break");
for(let i in oddNumbers){
    if(i==5)
        break; // stop this iteration
    console.log(`${i}. ${oddNumbers[i]}`);
}

console.log("Example of Continue");
for(let i in oddNumbers){
    if(i==5)
        continue; // skip this iteration and go to the next one
    console.log(`${i}. ${oddNumbers[i]}`);
}