// Herencia 
class Persona {
    _nombre
    _edad
    constructor(nombre, edad, isDeveloper) {  
        this.nombre = nombre;
        this.edad = edad;
    }
    saludo(){
        console.log(`Hola mi nombre es ${this._nombre}, tengo ${this._edad} años`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre,edad) // Super es pedirle los valores de la clase padre para usarse en las clases de los hijos.
        this.lenguaje = lenguaje
    }

    saludo(){
        super.saludo()
        console.log(`y soy desarrollador de ${lenguaje}`)
    }
}

const nuevodev = new Desarrollador('jean',22, 'javascript')
console.log(nuevodev)

// Polimorfismo
