const names = ["Gabriel", "Joh", "Camila", "Amanda", "Miguel"]
names.forEach(function(name,index){ // parameters of forEach: (this[i], i, this), which they are optional
    console.log(`${index+1}) ${name}`)
});

const showNames = (name,index) => console.log(`${index+1}) ${name}`);
names.forEach(showNames);