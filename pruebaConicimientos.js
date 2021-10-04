var sacha = {
        nombre: 'Sacha',
        apellido: 'Lifszyc',
        altura: 1.72,
        cantidadDeLibros:111 
}

var alan = {
        nombre: 'Alan',
        apellido: 'Perez',
        altura: 1.86,
        cantidadDeLibros:78
}

var martin = {
        nombre: 'Martin',
        apellido: 'Gomez',
        altura: 1.85,
        cantidadDeLibros:132
}

var dario = {
        nombre: 'Dario',
        apellido: 'Juarez',
        altura: 1.71,
        cantidadDeLibros:90 
}

var vicky = {
        nombre: 'Vicky',
        apellido: 'Zapata',
        altura: 1.56,
        cantidadDeLibros:91
}

var paula = {
        nombre: 'Paula',
        apellido: 'Barros',
        altura: 1.76,
        cantidadDeLibros:182
}

var personas = [sacha, alan, dario, martin, vicky, paula]
const esAlto = personas.filter(persona => persona.altura > 1.80)
//console.log(esAlto)

const tranformaraCm = persona => ({ 
        ...persona,
        altura:persona.altura * 100
})

const alturaACm = personas.map(tranformaraCm)
console.log(alturaACm)
console.log(personas)

var acum = 0;
for(let i = 0; i < personas.length;i++){
    acum = acum + personas[i].cantidadDeLibros
}

console.log(acum)

const contador = (acumulador, persona) => acumulador + persona.cantidadDeLibros

const numeroLibros = personas.reduce(contador, 0)
console.log(numeroLibros)
