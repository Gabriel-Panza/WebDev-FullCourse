const elements = ['a', '2', true, undefined, 5, "Gabriel", 7];
console.log(elements);

function filterNumbers(array){
    let result = [];
    array.forEach(a => {
        if (typeof a === typeof 1)
            result.push(a);
    });
    return result;
}

const elementsWithFilter = filterNumbers(elements);
console.log(elementsWithFilter);