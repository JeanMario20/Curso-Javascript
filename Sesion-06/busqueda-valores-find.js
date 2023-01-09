//Iterar los valores de una lista
const array = ['hola', 90, 39, 4,56, false]

//forma antigua(poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//forma ES6 (mas eficiente) .forEach()
array.forEach(valor => {
    console.log(valor)
})

//Busqueda de un valor dentro de una lista .find()
//Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90){
        return true
    }
})

console.log(variable)

//para una lista de objetos
let listaObjetos = [
    {'nombre' : 'jean', 'edad': 5},
    {'nonbre': 'diana', 'edad':54},
    {'nombre': 'Miguel', 'edad':36}
]

const respues = listaObjetos.find(o => o.nombre === 'Miguel')
console.log(respues)