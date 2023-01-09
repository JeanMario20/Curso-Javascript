//fecha de hoy
const fechaHoy = new Date()

//fecha de nacimiento
const fechaNacimiento = new Date(2000, 06, 19)

//variable que indique si hoy es ma´s tarde que la fecha de tu nacimiento
const checarTarde = fechaHoy.getTime > fechaNacimiento
//- Una variable que contenga el día de tu nacimiento
const diaNacimento = fechaNacimiento.getDate()
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth()
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const AnyoNacimiento = fechaNacimiento.getFullYear()

console.log(AnyoNacimiento)
