const logger = require("./logger")

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function ErrorReturn (numero) {
    return num * 5
}
// Registra el error en un archivo a través de un try...catch
try {
    console.log(ErrorReturn('op'))
    
} catch (e) {
    logger.error('esto es un mensaje de error personalizado')
}

