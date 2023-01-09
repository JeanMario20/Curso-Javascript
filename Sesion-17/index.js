function initMap() {
    //console.log("inicializando mapa")
    const posicion = {
        lat : 25.363,
        lng: 131.044 
    }

    const map = new google.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
}