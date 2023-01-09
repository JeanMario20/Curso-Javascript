//Como botner una lista a partir de otra .slice()
const array = ['hola', 1, 2, 3, true, null, 'adios']

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1,6))
//se crea otro valor que agarra los valores de la lista con el .slice()
const array2 = array.slice(1,4)
console.log(array2)

const3 = array.slice(2,-2)
console.log(array3)