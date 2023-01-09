/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const personal = {
    nombre: 'jean',
    apellido: 'herd',
    edad: 22,
    altura: 1.60,
    eresDesarrollador: true
}

const edad = personal.edad

const mejorAmigo1  = {...personal}
mejorAmigo1.nombre = 'mari'
mejorAmigo1.apellido = 'mass'
mejorAmigo1.edad = 20
mejorAmigo1.altura = 1.65
mejorAmigo1.eresDesarrollador = false

const mejorAmigo2 = {...personal}
mejorAmigo2.nombre = 'alex'
mejorAmigo2.apellido = 'herna'
mejorAmigo2.edad = 25
mejorAmigo2.altura = 1.70
mejorAmigo2.eresDesarrollador = false

const listaCompleta = [personal, mejorAmigo1, mejorAmigo2]
listaCompleta.sort((a,b) => a.edad - b.edad)
console.log(listaCompleta)
