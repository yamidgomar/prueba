const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestap, data, hashPrevio){
        this.timestap = timestap
        this.data = data
        this.hashPrevio = hashPrevio
        this.hash = this.calcularHash() 
    }

    calcularHash(){
        return SHA256(this.timestap + this.hashPrevio + JSON.stringify(this.data))
    }
}

class blockChain{
    constructor(){
        this.chain = [this.crearBloqueGenesis()]
    }

    crearBloqueGenesis(){
        return new Block('07/10/2021', 'Blocke Genesis', '0')
    }

    getUltimoBloque(){
        return this.chain[this.chain.length -1]
    }

    agregarNuevoBloque(nuevoBloque){
        nuevoBloque.hashPrevio = this.getUltimoBloque().hash
        nuevoBloque.hash = nuevoBloque.calcularHash()

        this.chain.push(nuevoBloque)
    }
}

let cutreCoin = new blockChain()

cutreCoin.agregarNuevoBloque(new Block('03/11/2021', {cantidad : '10'}))

cutreCoin.agregarNuevoBloque(new Block('03/11/2021', {cantidad : '1'}))
 
console.log(JSON.stringify(cutreCoin, null, 2))

