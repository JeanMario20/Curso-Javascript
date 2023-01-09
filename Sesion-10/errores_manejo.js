const miFuncion = val => {
    if(typeof val === 'number'){
    return 2 * val
    }
    throw new Error('El valor debe ser de tipo numero')
}

//const elDoble = console.log(miFuncion('22a'))
const numero = 8

try {
    // Codigo que puede fallar
    console.log('se esta ejecutando de manera correcta')
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e){
    // En caso de que falle, ejecuta lo siguiente
    console.error('Error')
    console.error(e)
} finally {
    console.log('esto se va a ejecutar tanto si se produce algun error, como si no existe ninguno')
}

// tipos de errores
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError