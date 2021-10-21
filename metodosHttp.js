class Privados{
    constructor(){
        this.metodos = {}
    }

    metod(metodo){
        this.metodos[metodo.toLowerCase()] = metodo
        console.log(this.metodos)
    }
}

const privados = new Privados()

privados.metod('GET')
privados.metod('POST')
