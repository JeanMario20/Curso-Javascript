//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compraLista = ['carne', 'huevos', 'bebida', 'dulces', 'pescado']

//Modifica la lista de la compra y añádele "Aceite de Girasol"
compraLista.splice(6,1,'aceite de girasol')
console.log(compraLista)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compraLista.splice(5)
console.log(compraLista)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPelisFav = [
{nombre: 'star wars 1', director: 'lucas', fecha : new Date(1999, 1)},
{nombre: 'star wars 2', director: 'lucas', fecha : new Date(1999, 43)},
{nombre: 'star wars 3', director: 'lucas', fecha : new Date(1999, 80)} 
]

console.log(listaPelisFav)

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas2010 = listaPelisFav.filter(o => o.fecha > new Date(2010, 1, 1))
console.log(peliculas2010)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const newArrayDirectores = listaPelisFav.map(element => element.director)
console.log(newArrayDirectores)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newArrayPeliculas = listaPelisFav.map(element => element.nombre)
console.log(newArrayPeliculas)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const newArrayPelisDirector = listaPelisFav.map(element => element.nombre.concat(element.director))
console.log(newArrayPelisDirector)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const newArraySpread = [...nombre, ...director]
console.log(newArraySpread)


