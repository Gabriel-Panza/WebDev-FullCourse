class Launch{
    constructor(name = "Generico", value = 0){
        this.name = name;
        this.value = value;
    }
}

class FinancialCicle{
    constructor(month, year){
        this.month = month;
        this.year = year;
        this.launches = [];
    }

    addLaunch(...launches){
        launches.forEach(l => {
            this.launches.push(l);
        })
    }

    summary(){
        let total= 0;
        this.launches.forEach(l => {
            total += l.value;
        })
        return total;
    }
}

const salary = new Launch("Salary", 8000);
const light = new Launch("Light", -1000);

const total = new FinancialCicle(12,2020);
total.addLaunch(salary,light);
console.log(total.summary()); // 8000 + (-1000) = 7000


class GrandFather{
    constructor(surname){
        this.surname = surname;
    }
}
class Father extends GrandFather{
    constructor(surname, profession = "Lawyer"){
        super(surname);
        this.profession = profession;
    }
}
class Son extends Father{
    constructor(surname){
        super(surname);
    }
}

const son = new Son("Panza");
console.log(son);