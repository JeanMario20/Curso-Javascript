//modulo es una parte de codigo que se puede reutilizar en varias partes de nuestro programa.
// formas de importar/exportar módulos
// 1. Coomnjs - require
// 2. Import ES6 - import

//const moduloMatematicsa = require('./modulos/matematicas.js')
const { factorial, suma } = require('./modulos/matematicas.js')

const fact = suma(10,30)
console.log(fact)

