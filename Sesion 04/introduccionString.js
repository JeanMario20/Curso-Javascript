//metodos mas utilzados con cadenas de catacteres
//como obtener la longitud de un string

let str = 'Hola soy un string'
console.log(str.length)

//obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str = str.slice(0, 10)
console.log (slice_str)

let substring_str = str.substring(6, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10)
console.log(substr_str)

//remplazar parte del contenido de una cadena de texto
let cadena = 'Hola mi nombre es gorka'
console.log(cadena)
console.log(cadena.replace('gorka', 'Miguel'))