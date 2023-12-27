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

function subtract1(a=1,b=1)
{
    return a-b;
}

console.log(subtract1());
console.log(subtract1(3));

function subtract2(a,b)
{
    a = a || 1;
    b = b || 1;
    return a-b;
}

console.log(subtract2());
console.log(subtract2(3));
