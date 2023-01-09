// Trabajar con funciones
const nom = 'Jean'

//saludar (Jean)
saludar(nom)

function saludar(nombre) {
    console.log(`hola ${nombre}`)
}

//en las funciones se pueden trabajar con valores indefinidos tomandolos como arrays
let persona = {nombre: 'jean', apellido: 'hernan'}
saludarPersona(persona)

function saludarPersona (objeto){
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)
    
    //se puede modificar pero afectaria al array de origen
    objeto.nombre = 'mario'
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)
}

console.log(persona)

//una funcion tenga por defecto un valor definido en el parametro
function imprimeNumero (numero = 7) { //parametro por defecto
    console.log(numero)
}

imprimeNumero()


//factor de propagacion sirve para imprimir un array 

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1,4,5,6,7,'hola')

//sumas en las funciones

function suma(...nums) {
    return nums.reduce((a, b) => a+ b)
}

const s = suma(1,3,4,5,6,7)
console.log(s)

//multiplicar
function nultiplicar(a = 0, b = 0) {
    return a * b
}

console.log(nultiplicar(5,6))
