//trabajando con fechas

//obtener una fecha
const fecha = new Date();
console.log(fecha)

// los meses se inicializan en 0 (0 - enero, 11 - diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha2)

//se puede poner valores negativos
const fecha3 = new Date(-10000000000000)
console.log(fecha3)

//se puede almacenar las fechas con string
const fecha4 = new Date('octuber 13, 1979 12:15:15')
console.log(fecha4)

//manera correcta de comparar fechas
console.log(fecha2.getTime() === fecha4.getTime())

//obtener el dia .getDay()
console.log(fecha2.getDay())

//Obtener el mes .getMonth() Siempre sumarle un + 1
console.log(fecha2.getMonth() + 1)

//obtener el año .getFullYear()
console.log(fecha2.getFullYear())

//obtener el horario local donde se encuentra o seleccionarlo 
console.group(fecha2.toLocaleDateString())