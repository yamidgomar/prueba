class Cars {
    constructor(name, year){
        this.name = name
        this.year = year
        this.age()
    }

    age(){
        let date = new Date();
        let anio = date.getFullYear() - this.year

        var retorno = anio === 1?' año':' años'
        return  anio + retorno
    }
}

var car1 = new Cars('Mazda', '2006')
var car2 = new Cars('chevrolet', '2020')

console.log(`Mi auto es marca ${car1.name} y es del año ${car1.year}, es decir que tiene ${car1.age()}.`)
console.log(`Mi auto es marca ${car2.name} y es del año ${car2.year}, es decir que tiene ${car2.age()}.`)
