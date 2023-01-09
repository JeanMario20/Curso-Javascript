// Trabajar con métodos mas avanzados
// .map() . filter() .reduce()

//.map() te permite iterar sobre un arreglo y modificar sus elementos.

const array = ['san sebastian', 'Madrid', 'Barcelona', 'alicante', 'bilvoa']

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor,indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

//.filter()  **MUY UTIL EN REACT
const listaObjetos = [
    {nombre: 'jean', edad:'49'},
    {nombre: 'd', edad:'9'},
    {nombre: 'er', edad:'4'},
    {nombre: 'maria', edad:'67'}
]
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== 'jean')
console.log(nuevaLista)


//.reduce() obtener algo de una lista

const valores = [3, 4, 56, 76, 87]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma)