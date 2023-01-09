/* Crea un nuevo fichero JS que contenga las siguientes líneas*/

//- Una clase llamada "Estudiante" que tenga:
//- Una variable llamada nombre
//- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
class Estudiante {
    #nombre
    #asignatura = ['Javascript', 'HTML', 'CSS']
    constructor (nombre){
        this.#nombre = nombre
    }

    //- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos(){
        return [this.#nombre, this.#asignatura]
    }
}

//- Crea una nueva instancia de "Estudiante"
const estudiante = new Estudiante('jean')
//- Haz la llamada al método obtenDatos
console.log(estudiante.obtenDatos())