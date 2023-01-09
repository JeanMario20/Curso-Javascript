//crear una clase 
// Clase: atributos o caracteristicas por defecto para crear varias objetos.
class Persona {
    // private -> # para volver los atributos privados y no se puedan cambiar en el exterior de la clase
    #nombre;
    #edad;
    constructor(nombre, edad) {  
        this.#nombre = nombre;
        this.#edad  = edad
    }

    // Funciones de llamado de los atriburos se crean dentro de la clase.
    saludo(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }

    obtenNombre(){ // Funcion nombre -> acceder a algun atributo protegido
        return this.#nombre
    }

    #obtenedad(){
        return this.#edad
    }

    getEdad(){ //Getter
        return this.#edad
    }

    setEdad(nuevaEdad){ //Setter
        this.edad = nuevaEdad
    }

}

// Objetos: entes que llenan las caracteristicas de las clases creadas.
// Crear nuevo objeto.
const persona = new Persona ("jean", 70)

// llamar propiedades del objeto
persona.saludo()
console.log(persona.obtenNombre())
console.log(persona.obtenedad())

//----------------------------------------------------------------------

//Getter obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> Metodo que nos permiten cambiar el valor de algunos de los valores privados o protegidos
persona.setEdad(56)
console.log(persona.getEdad())
