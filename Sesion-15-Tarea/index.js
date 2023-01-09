/*localStorage.setItem("nombre", "Jean")
localStorage.setItem("nombre","Mari")

console.log(localStorage.getItem("nombre"))
localStorage.setItem('persona',JSON.stringify ({nombre: 'jean', edad: 33}))

//console.log(Json,parse(localStorage.getItem('persona')))

//JSON.Stringify -> consiver un objeto/array en string
//JSON.parse -> Convierte un objeto/array convertido a travéz de stringify en un objeto de javascript

//sessionStorage.setItem("nombre-sesion", "Jean")

Cookies 

console.log(document.cookie)
//crear nueva Cookie
DocumentTimeline.cookie = 'nombreCookie=Jean; expires=' + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie) */

const nombre = 'jean'
const apellido = 'Hernandez'

const persona = new Object ()
persona.nomb = nombre
persona.apell = apellido

//sessionStorage.setItem('nombre', persona.nomb)
//localStorage.setItem('apellido', persona.apell)

DocumentTimeline.cookie = 'nombreCookie= ' + persona.nomb, 'apellidoCookie=' + persona.apell; 'expires= + new Date(2023, 0, 1).toUTCString()'
document.cookie = "nombreCookie= jean hernandez; expires=00:02:00 UTC; path=/;";
console.log(document.cookie) 
