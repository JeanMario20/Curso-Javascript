/*localStorage.setItem("nombre", "Jean")
localStorage.setItem("nombre","Mari")*/

console.log(localStorage.getItem("nombre"))
localStorage.setItem('persona',JSON.stringify ({nombre: 'jean', edad: 33}))

//console.log(Json,parse(localStorage.getItem('persona')))

//JSON.Stringify -> consiver un objeto/array en string
//JSON.parse -> Convierte un objeto/array convertido a travéz de stringify en un objeto de javascript

//sessionStorage.setItem("nombre-sesion", "Jean")

/* Cookies */

console.log(document.cookie)
//crear nueva Cookie
DocumentTimeline.cookie = 'nombreCookie=Jean; expires=' + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)