//modulo es una parte de codigo que se puede reutilizar en varias partes de nuestro programa.
function factorial (a) {
    let factorial = 1;
    for(let i = 2; a <= a; i++ ){
        factorial *= i;
    }
    return factorial
}

function suma (a, b) {
    return a + b
}

//exportar e importar modulos.
module.exports = {
    factorial,
    suma 
}