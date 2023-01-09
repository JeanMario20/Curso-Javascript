// funciones de tipo flecha - funciones anonimas

//usamos las funciones de tipo flecha cuando el codigo se puede resolver en una sola linea de codigo
//las funciones tipo flecha son la version corta de las funciones normales.

//definir variables y funciones hasya arriba de nuestro codigo

const array = [1,4,5,6,7,8,9]
const array2 = array.map((valor) => valor*2)
console.log(array2)

///
let sum = (a, b) => {  // la llave abre una función multilínea
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
};
console.log(sum(1, 2))


//---------------------------------------------
const dobleDelValor = valor => valor*2
console.log(dobleDelValor(7))

/*function doble (valor) {
    return valor * 2
    es lo mismo que la funcion llave 'dobleDelValor'
}*/

const array3 = array.map(dobleDelValor)
console.log(array3)






