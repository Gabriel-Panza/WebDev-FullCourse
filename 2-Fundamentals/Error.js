function LaunchError(error)
{
    throw new Error("Something went wrong. See if you mispell the name of a variable");
}
function printNameInCaps(obj)
{
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    } catch(e){
        LaunchError(e);
    }
    finally{
        console.log("Rodou o try/catch!")
    }
}

const obj = {
    Name: "Gabriel"
};
printNameInCaps(obj);