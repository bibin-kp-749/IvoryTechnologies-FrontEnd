//Function that used for add new location
function addLocation() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const company = document.getElementById('company').value;

    fetch('https://localhost:7076/api/Location', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            address,
            phone,
            latitude,
            longitude,
            company
        })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('add-message').innerText = 'Added successfully!';
        } else {
            document.getElementById('add-message').innerText = 'Failed to Add.';
        }
    })
    .catch(error => {
        document.getElementById('add-message').innerText = 'Error: ' + error.message;
    });
}

