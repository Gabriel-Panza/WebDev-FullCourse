function Car(maxSpeed=200, delta=5){
    //private atribute
    let actualSpeed = 0;

    //public method
    this.accelerate = function(){
        if (actualSpeed < maxSpeed)
            actualSpeed += delta;
        if (actualSpeed >= maxSpeed)
            actualSpeed = maxSpeed;
    }

    //public method
    this.getActualSpeed = function(){
        return actualSpeed;
    }
}

const citroen = new Car(250);
citroen.accelerate(); // +5
citroen.accelerate(); // +5
citroen.accelerate(); // +5
console.log(citroen.getActualSpeed());

const ferrari = new Car(350, 10);
ferrari.accelerate(); // +10
ferrari.accelerate(); // +10
ferrari.accelerate(); // +10
console.log(ferrari.getActualSpeed());

console.log(typeof Car);
console.log(typeof ferrari);
