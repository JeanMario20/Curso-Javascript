//carga y sobrecarga de funciones
function saludar() {
    hola()
}

function hola(){
    console.log('hola, Soy la funcion hola()')
}

saludar()

//manera en como trabaja javascript la carga de funciones

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()