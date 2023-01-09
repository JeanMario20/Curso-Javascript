// Funciones asincronas
// otra forma de try catch en peticiones de bases de datos.

function miAsinc(){
    //hace una llamada a una base de datos externa
    //Puede darnos algún error
}

const miPromesa = new Promise((resolver, reject) => {
    //Si está todo correcto 
    if (true) {
        resolver()
    } else {
        reject()
    }
})


miPromesa 
    .then(() => console.log('Se a ejecutado de forma correcta')) // Si el codigo miPromesa() finaliza con exito en el parametro resolver esta linea de codigo se corre
    .catch(() => console.log('Error')) // Si el codigo miPromesa() finaliza con un error en el parametro reject esta linea de codigo se corre
    .finally(() => console.log('yo me ejecuto siempre')) // Siempre va a correr esta linea independientemente del resultado.