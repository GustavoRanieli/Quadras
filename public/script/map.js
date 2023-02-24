if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(teste);
} else {
    alert("Por favor aceite o token de geolocalização");
}

function teste(position){
    var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 100,
    }).addTo(map);

    L.marker([position.coords.latitude, position.coords.longitude], 13).addTo(map)
        .bindPopup('Teste de Pop')
        .openPopup();
    
    L.Control.geocoder({
        suggestTimeout: 0,
        errorMessage: "Erro ao encontrar"
    }).addTo(map)
}

