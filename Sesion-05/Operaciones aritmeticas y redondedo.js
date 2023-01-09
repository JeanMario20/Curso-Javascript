// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicacion (*)
console.log(a * b);
// Division
console.log(a / b);

//Representacion de los numeros en cadenas de texto
console.log(typeof a)

//pasar de valores numericas a string.
let a_s = a.toString()
console.log(a_s)
console.log(typeof a_s)

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
// .toFixed (el valor lo convierte a string, se elige la cantidad de decimales como resultado)
console.log(d.toFixed(4));

let e = 1839.123456789;
console.log(e.toFixed(2));

// .toPrecision(x) - Limita el número de cifras significativas - los convierte en string
console.log(e.toPrecision(7));
console.log(typeof e.toPrecision(4))