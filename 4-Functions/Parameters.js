function add(){
    let addVariable;
    if (typeof arguments[0] == typeof '')
        addVariable = '';
    else
        addVariable = 0;
    for(let i in arguments){
        addVariable+= arguments[i];
    }
    return addVariable;
}

console.log(add(1,2,3));
console.log(add(1,2,"Test"));
console.log(add("c","a","r"));