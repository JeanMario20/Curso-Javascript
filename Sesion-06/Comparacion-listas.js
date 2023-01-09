// comparar listas
// .Every()

const array = [3, 4, 6, ,7 ,8 ,9, 78, -43, 3,4, , 65]

/*const resultado = array.every(valor => {
    if (typeof valor === 'number'){
        return true
    } else {
        return false
    }
})*/

const resultado = array.every(valor => typeof valor === 'number')

//devuelve true en el resultado.
console.log(resultado)

//Comparacion de listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

/*const comparaArrays = (array_1, array_2) => {
    if (array_1.lenth !== array_2.length) return false
    const res = array_1.every((valor, i) => {
        if (valor === array_2[i])
    })
}*/
