//Como unir dos listas .concat(lista2)

const lista1 = ['hola', 2, false, null]
const lista2 = ['adios', 8, true]

console.log(lista1.concat(lista2))

//nueva lista que contiene las 2 primeras listas
const lista3 = lista1.concat(lista2)
console.log(lista3)

//Como unir dos listas con el factor de propagación
console.log(...lista3)

//es lo mismo que .concat(lista1)
const lista4 = [...lista1, ...lista2]
console.log(lista4)

//Error mal entendido el concepto del factor de propagacion.
//se obtiene 2 listas separadas en vez de unir las 2 listas.
const lista5 = [lista1, lista2]
console.log(lista5)

