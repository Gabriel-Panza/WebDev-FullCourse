let numero = 1;
{
    let numero = 2;
    console.log(numero); // 2
    {
        let numero = 3;
        {
            console.log(numero); // 3
        }
    }
}
console.log(numero); // 1

/*
        IMPORTANT
    let have 3 scopes:
    global, local and block.
    what happens when using let
    is that the program will try
    to find the declaration that
    is more close/inside in the 
    scope and will use it.
*/

for(let i = 0; i<10; i++)
{
    console.log(i);
}
//console.log("i = " + i); // It will give an error, bcs let was created inside a block, so it is not visible outside the scope

const funcs = [];
for(let j = 0; j<10; j++)
{
    funcs.push(function(){
        console.log(j);
    })
}
funcs[2](); // 2
funcs[8](); // 8