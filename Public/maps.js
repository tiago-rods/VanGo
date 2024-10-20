

let map, directionsService, directionsRenderer;

function initMap() {
    // Cria o mapa centrado em Campinas
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -22.9053, lng: -47.0659 },
        zoom: 12,
    });

    // Inicializa os serviços de direções
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

function calculateRoute() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    if (!origin || !destination) {
        alert("Por favor, insira ambos os endereços.");
        return;
    }

    const request = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            alert("Não foi possível calcular a rota: " + status);
        }
    });
}

// Inicializa o mapa ao carregar a página
window.initMap = initMap;