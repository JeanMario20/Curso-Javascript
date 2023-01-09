//trabajar con listas(arrays, arreglos, vectores...)
let array = [1, 'hola', false, {id: 6}, null, undefined]

console.log(array)

// acceder a los valores de un array a través de su pocision.
//aray [indice] => 1,2,3,4,5 ....
console.log(array[2])
console.log(array[1])
console.log(array[5])

//metofos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array

array.push('final')
console.log(array)

//valores se agregan al principio -> unshift
array.unshift('Inicio')
console.log(array)

//metodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

const array2 = [1,3,'hola', false]

//Quitar valores al final ->
array2.pop()
console.log(array2)

//Quitar valores al principio
array2.shift()
console.log(array2)

//metodos para elimniar, modificar o añadir valores en nuestra array
// .splice(x, y, z)
const array3 = [1,2,3,4,5,6]

//Elinar valores .plice(indice, numValoresEliminar)
array3.splice(2,2)
console.log(array3)

//Añadir valores apartir del indice .splice(indice, 0, valores)
array3.splice(1, 1, 'hola')
console.log(array3)

//Modificar valores .splice(indice, 1, valores)
array3.splice(2,1)
console.log(array3)