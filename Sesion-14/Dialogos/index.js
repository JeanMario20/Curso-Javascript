const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    //alert("se ha hecho click")
   // confirm("estas de acuerdo?") && console.log('ok')
    //confirm("estas de acuerdo?") ? console.log('ok') : console.log('NO')

    const respuesta = confirm ('seguro?')
    if (respuesta) {
        console.log('estas de acuerdo ??')
    }else {
        console.log('No estas de acuerdo')
    }
})

const botonInfo = document.getElementById('#info')
botonInfo.addEventListener("click", () => {
    const nombre = prompt('cual es tu nombre?')
    console.log('tu nombre es ' + nombre)
})

const lista = [{
    nombre: 'jean',
    edad: 22,
},{
    nombre: 'mari',
    edad: 20,
}]

///onsole.log(lista)
console.table(lista)