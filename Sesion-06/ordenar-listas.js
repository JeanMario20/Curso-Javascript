//sort() -> MODIFICA EL ARRAY
const array = [1,3,4,5,6,7,8,0,3,4,54]

console.log(array)

array.sort((a, b) => {
    if(a < b) {
        return -1
    }else if (a > b) {
        return +1
    } else {
        return 0
    }
})

console.log(array)

//ordenar unicamente arrays numericos
const arrayNumericos = [4, 5, 7 ,87 ,765, 56, 56]

array.sort((a, b) => b - a)

console.log(arrayNumericos)

const listaObjetos = [
    {nombre: 'jean', edad:49},
    {nombre: 'd', edad:9},
    {nombre: 'er', edad:4},
    {nombre: 'maria', edad:67}
]
/*
listaObjetos.sort((a,b) => {
    if (a.edad < b.edad){
        return -1
    } else if (a.edad > b.edad){
        return +1
    } else {
        return 0
    }
})*/

listaObjectos.sort((a,b) => a.edad > b.edad)

console.log(listaObjetos)
