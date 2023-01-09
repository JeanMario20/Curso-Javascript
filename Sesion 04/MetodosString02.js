//metodos de cadenas de texto (parte 2)
let input = 'Escorpio'
let db = 'escorpio'

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toUpperCase === db.toUpperCase)

//strim () elimna los espacios en blanco en los caracteres

//obtener el caracter que hay en cierta posicion.
let str_4 ='hola soy el string numero 4' //equivalente a ['h','o','l','a,'']

console.log(str_4.charAt(5))
console.log(str_4[5])

//obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = 'Hola soy Gorka y me gusta el surf'
console.log(str_5.indexOf('Gorka'))
console.log(str_5.lastIndexOf('Gorka'))