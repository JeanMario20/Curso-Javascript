import {suma, factorial, nombre } from "./modulos/Matematicas.js"
import getAutor, {libro} from "./modulos/literatura.js"

const sum = suma(4,12)
console.log(sum)
console.log('este es una variable importada ' + nombre)

console.log(getAutor() + ' su libro fue ' + libro)