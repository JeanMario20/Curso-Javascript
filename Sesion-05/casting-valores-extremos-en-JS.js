// Operacodr .valueof() - obtener valores numericos apartir de literales
let a = 2;
let b = new Number(3);

console.log(2);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String('Hola soy un string')
console.log(str);
console.log(str.valueOf())

// NaN (Not a Number)- Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n))

let numerador = 19;
let divisor = 0;

let divisor_2 = null; 

console.log(numerador / divisor);
console.log(numerador / divisor_2)

// como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.945';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); //solo lo concatena

console.log(Number(numero) + num2) //convertir el string en number

console.log(parseInt(numero)) //convierte en numero entero
console.log(parseFloat(numero)) //convierte el numero con sus decimales

let num3 = 4;
console.log(parseInt(num3)) //convierte solo el numero entero
console.log(parseFloat(num3)) // convierte el numero con sus decimales

// Números hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex));

// Obtener los valores máximos y minimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);