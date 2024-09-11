//Function that trigger when we delete an existing Item using unique phone Number
function deleteLocation() {
    const phone = document.getElementById('delete-id').value;
    console.log(company,"kkk");
    
    fetch(`https://localhost:7076/api/Location?Phone=${phone}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('delete-message').innerText = 'Deleted successfully!';
        } else {
            document.getElementById('delete-message').innerText = 'Failed to Delete.';
        }
    })
    .catch(error => {
        document.getElementById('delete-message').innerText = 'Error: ' + error.message;
    });
}

//Event That trigger to Update the exising data using Phone number
document.getElementById('editForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;

    fetch(`https://localhost:7076/api/Location`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            address,
            phone,
            company,
            latitude,
            longitude
        }),
    })
    .then(res => {
        if (res.ok)
            document.getElementById('success').textContent = 'Location updated successfully';
         else 
            document.getElementById('error').textContent = 'Error updating location';
    })
    .catch(err => {
        document.getElementById('error').textContent = 'Error updating location';
    });
});

