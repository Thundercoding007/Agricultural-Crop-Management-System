// Updated Crop Yield Prediction JavaScript

function calculateYield() {
    // Collect input values from the form
    const crop = document.getElementById('crop').value;
    const cropYear = document.getElementById('crop-year').value;
    const season = document.getElementById('season').value;
    const state = document.getElementById('state').value;
    const area = document.getElementById('area').value;
    const rainfall = document.getElementById('rainfall').value;
    const fertilizer = document.getElementById('fertilizer').value;
    const pesticide = document.getElementById('pesticide').value;

    // Validate that all fields are filled
    if (!crop || !cropYear || !season || !state || !area || !rainfall || !fertilizer || !pesticide) {
        alert('Please fill out all fields.');
        return;
    }

    // Create the data object to send to the backend
    const data = {
        crop: crop,
        crop_year: cropYear,
        season: season,
        state: state,
        area: area,
        annual_rainfall: rainfall,
        fertilizer_usage: fertilizer,
        pesticide_usage: pesticide
    };

    // Send a POST request to the backend API
    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        // Check if the API returned an error
        if (result.error) {
            alert('Error during prediction: ' + result.error);
            console.log(result.error);
        } else {
            // Display the predicted yield in the output div
            const outputDiv = document.getElementById('prediction-output');
            outputDiv.innerHTML = `<h3>Predicted Yield: ${result.predicted_yield.toFixed(2)} tons per hectare</h3>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
