//crear una clase
class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {  //metodo por defecto para crear clases
        this.nombre = nombre;
        this.edad;
        this.isDeveloper;
    }
    saludo(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
}

//crear nuevo objeto de la clase persona = 'new'
const nueva_persona = new Persona("jean", 22, true)
console.log(nueva_persona)
nueva_persona.saludo()

// Instanciacion forma de inicializar una clase
// Diferencias
let numero = 60 // inicializando
let persona_2 = new Persona('maria', 34, false) // instanciar, un objeto de la clase en este caso persona.
