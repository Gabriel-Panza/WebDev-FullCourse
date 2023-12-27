// Class
class Person{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`Meu nome é ${this.name}`);
    }
}
const p1 = new Person("Gabriel");
p1.speak();

// Factory
const person = name => {
    return {
        speak: () => console.log(`Meu nome é ${name}`)
    }
}
const p2 = person("Joh");
p2.speak();