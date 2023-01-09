//trabajando con objetos
const obj = {
    id: 4,
    nombre: 'Juan',
    apellido: 'Gonzales',
    isDeveloper: true,
    libros_favoritos: ['libro1','libro3','libro4'],
    //se inicia con comillas simples por que inicia con valor numerico y un guion
    '4-juegos': [1,3,4,5]
}

//se accede a los valores del objeto mediante el . (obj.'la Propiedad')
console.log(obj.nombre)
console.log(obj["4-juegos"])

//se puede acceder a los valores del objeto por medio de las variables que creamos
const prop = 'isDeveloper'
console.log(obj[prop]) //checa si existe el valor en el objeto

//nuevos objetos creados a partir del original sufren los mismos cambios, se debe a que apuntan a un mismo punto de memoria
const obj2 = obj
console.log(obj2)

obj2.nombre = 'iñigo'
console.log(obj2.nombre)
console.log(obj.nombre) //evidencia del mismo nombre aunque se haya cambiado en uno especifico (obj.nombre == 'iñigo')

//forma de crear un nuevo objeto sin editar al original

const obj3 = {...obj}

obj3.nombre = 'Gorka'
console.log(obj.nombre)
console.log(obj3.nombre)

/////////////////////////////////////
// Como ordenar objetos en funcion de una propiedad
//.sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

const listaPeliculas = [
    {titulo: 'peli1', anyo: 19},
    {titulo: 'peli1', anyo: 18},
    {titulo: 'peli3', anyo: 17},
    {titulo: 'peli4', anyo: 16},
    {titulo: 'peli5', anyo: 15},
]

listaPeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(listaPeliculas)