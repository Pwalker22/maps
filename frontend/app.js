document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([4.632581865366762, -74.0808500029609], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    let marker;

    map.on('click', (e) => {
        const latlng = e.latlng;

        if (marker) {
            marker.setLatLng(latlng);
        } else {
            marker = L.marker(latlng).addTo(map);
        }

        document.getElementById('latitud').value = latlng.lat;
        document.getElementById('longitud').value = latlng.lng;

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`)
            .then(response => response.json())
            .then(data => {
                const address = data.display_name;
                document.getElementById('direccion').value = address;
            })
            .catch(error => {
                console.error('Error al obtener la dirección:', error);
            });
    });

    document.getElementById('cliente-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío por defecto del formulario
    
        const formData = new FormData(event.target);
    
        fetch('http://localhost:3000/api/clientes', {  
            method: 'POST',
            body: JSON.stringify({
                cedula: formData.get('cedula'),
                nombres: formData.get('nombres'),
                apellidos: formData.get('apellidos'),
                direccion: formData.get('direccion'),
                latitud: formData.get('latitud'),
                longitud: formData.get('longitud')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Mostrar respuesta del servidor
            alert('Cliente agregado exitosamente.');
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Error al agregar cliente.');
        });
    });
});
