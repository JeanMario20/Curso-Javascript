document.getElementById("btn1").onclick = function () {
    alert("click en el botón")
}


$(() => {
    $("#btnQuery").click(() => {
        alert('Hola, estoy utilizando jQuery')
    })
})