// Initialize the map centered at a default location
const map = L.map('map').setView([37.7749, -122.4194], 10);

// Add a tile layer with OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fetching location data from the web Api
fetch('https://localhost:7076/api/Location')
    .then(response => response.json())
    .then(data => {
        // adding Marks to the Map     
        data.forEach(location => {
            const marker = L.marker([location.latitude, location.longitude]).addTo(map);
            marker.bindPopup(`<b>${location.name}</b><br>${location.address}<br>Phone: ${location.phone}<br>Company:${location.company}`);
        });
    })
    .catch(error => {
        //catch the error is occured
        console.error('Error fetching location data:', error);
    });