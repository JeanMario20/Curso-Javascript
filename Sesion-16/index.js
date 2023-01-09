const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", Event => {
        console.log("Estoy arrastranod le parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const element_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(element_fantasma,0,0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("he terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", Event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        //console.log("drag over")
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})