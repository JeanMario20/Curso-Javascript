//sets o conjuntos (en castellano)

const array = [1,3, 5, 6, 7, 8, 'hoal', {id: 7}, 'hoal']

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// .add() agregar valores unicos
// no agrega valores repetidos
miSet.add(9)
console.log(miSet)
miSet.add(5)
console.log(miSet)

// .delete() elimina los valores del set
miSet.delete('hoal')
console.log(miSet)

//.clear elimina todos los valores del set

//.has() comprueba de que existe el valor solo con el array
console.log(array.includes(3))

//.size() muestra cuantos valores totales se encuentran en el set
console.log(miSet.size)

//forma de iterar el set
miSet.forEach(valor => {
    console.log(valor)
})

//volver a transformar a un array
// util para crear aarays sin datos repetidos
//tecnica propagacion
const nuevoArray = [...miSet]