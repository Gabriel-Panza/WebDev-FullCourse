{
    {
        {
            var what = "What???";
            console.log(what);
        }
    }
}
console.log(what);

function test() 
{
    var local = "Home";
    console.log(local);
}
test();
//console.log(local); // It will give an error bcs we defined the variable locally inside the function 'test'

/*
        IMPORTANT
    var only have 2 scopes:
    global and local.
    global scope happens when
    we have a variable outside 
    a function.
    local scope happens when
    we have a variable inside 
    a function
*/

for(var i = 0; i<10; i++)
{
    console.log(i);
}
console.log("i = " + i); // 10

const funcs = [];
for(var j = 0; j<10; j++)
{
    funcs.push(function(){
        console.log(j);
    })
}
funcs[2](); // 10
funcs[8](); // 10