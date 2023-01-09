// funciones generadoras

// Cada que se manda a llamar genera un id nuevo.
// envez de que corra todo el while hasta imprimir los 10 id y salga del while se imprimira una vez por cada vez que la funcion es llamada
//imprimirá una vez por llamada de la funcion
function* generarId(){
    let id = 0;
    while(true) {
        id ++
        if (id === 10) {
            return id
        }
        //la variable yield ayuda a pausar o resumir una funcion de manera asincrona
        // Tambien ayuda retornar un valor como el return, solo en generadores.
        yield id
    }
}

// Se manda a llamar la funcion para el Id nuevo.
const gen = generarId();

console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next().value) // 3
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value) //10