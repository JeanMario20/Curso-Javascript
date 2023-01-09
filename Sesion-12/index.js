const persona = {
    nombre: 'jean',
    edad: 22,
    isDeveloper: true,
    saludo: function(){
        console.log('hola')
    }
}

//console.log(persona)
persona.saludo()

//evitar repetir codigo
//funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //nombre : nombre
        edad,
        isDeveloper,
        saludo: function(){
            console.log('hello')
        }
    }
}

const nueva_persona = creaPersona('jean', 22, true)
console.log(nueva_persona)