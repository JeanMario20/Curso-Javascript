//- Una función sin parámetros que devuelva siempre "true
function returnTrueAlways(){
    return true
}

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise ((resolver,error) => {
    if (returnTrueAlways() == true) {
        setTimeout(() => {
            resolver()
        }, 5000)
    } else {
        error()
    }
})

miPromesa
    //.then(() => console.log('13'))

// - Una función generadora de índices pares automáticos
function* paresAutomaticos() {
    let i = 0
    while(true) {
        i ++
        if(i % 2 === 0) {
            yield i
        }
        
    }
}

const gen = paresAutomaticos();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)