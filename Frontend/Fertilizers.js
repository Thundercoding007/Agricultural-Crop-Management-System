const cropData = {
    rabi: {
        cereal: {
            wheat: {
                fertilizers: [
                    { name: 'Urea', amount: '40-60 kg/acre' },
                    { name: 'DAP', amount: '20-30 kg/acre' }
                ],
                pesticides: [
                    { type: 'Fungicide', name: 'Triazole-based fungicides (e.g. Tebuconazole)', amount: '0.2-0.5 kg/acre' },
                    { type: 'Bactericide', name: 'Copper Sulfate', amount: '1-2 liters/acre' },
                    { type: 'Nematicide', name: 'Oxamyl', amount: '0.5 kg/acre' }
                ],
                insecticides: [
                    { type: 'Biological', name: 'Neem Extract', amount: '1 liter/acre' },
                    { type: 'Chemical', name: 'Cypermethrin', amount: '1-2 liters/acre' }
                ],
                herbicides: [
                    { type: 'Pre-Emergent', name: 'Pendimethalin', amount: '1-2 kg/acre' },
                    { type: 'Post-Emergent', name: '24-D', amount: '500-750 grams/acre' }
                ]
            },
            barley: {
                fertilizers: [
                    { name: 'Urea', amount: '30-50 kg/acre' },
                    { name: 'MOP', amount: '20-25 kg/acre' }
                ],
                pesticides: [
                    { type: 'Fungicide', name: 'Dithiocarbamate-based fungicides (e.g. Mancozeb)', amount: '0.3-0.6 kg/acre' },
                    { type: 'Bactericide', name: 'Streptomycin', amount: '0.5 kg/acre' }
                ],
                insecticides: [
                    { type: 'Biological', name: 'Bacillus thuringiensis', amount: '1 kg/acre' },
                    { type: 'Chemical', name: 'Chlorpyrifos', amount: '0.5-1 liter/acre' }
                ],
                herbicides: [
                    { type: 'Pre-Emergent', name: 'Glyphosate', amount: '1-2 liters/acre' },
                    { type: 'Post-Emergent', name: 'Atrazine', amount: '1 liter/acre' }
                ]
            }
        },
        // Add other crop categories for Rabi season (e.g., pulses, fruits, vegetables)...
    },
    kharif: {
        cereal: {
            rice: {
                fertilizers: [
                    { name: 'Urea', amount: '80-100 kg/acre' },
                    { name: 'DAP', amount: '40-50 kg/acre' },
                    { name: 'MOP', amount: '30-40 kg/acre' }
                ],
                pesticides: [
                    { type: 'Fungicide', name: 'Tebuconazole', amount: '0.2-0.3 kg/acre' },
                    { type: 'Bactericide', name: 'Copper Sulfate', amount: '1-2 liters/acre' }
                ],
                insecticides: [
                    { type: 'Biological', name: 'Bacillus thuringiensis', amount: '1 kg/acre' },
                    { type: 'Chemical', name: 'Cypermethrin', amount: '1-1.5 liters/acre' }
                ],
                herbicides: [
                    { type: 'Pre-Emergent', name: 'Bromoxynil', amount: '0.5-1 liter/acre' },
                    { type: 'Post-Emergent', name: 'Glyphosate', amount: '1-1.5 liters/acre' }
                ]
            },
            maize: {
                fertilizers: [
                    { name: 'Urea', amount: '60-80 kg/acre' },
                    { name: 'DAP', amount: '30-40 kg/acre' },
                    { name: 'MOP', amount: '25-35 kg/acre' }
                ],
                pesticides: [
                    { type: 'Fungicide', name: 'Propiconazole', amount: '0.2-0.3 kg/acre' },
                    { type: 'Bactericide', name: 'Copper Sulfate', amount: '1 liter/acre' }
                ],
                insecticides: [
                    { type: 'Biological', name: 'Neem Extract', amount: '1 liter/acre' },
                    { type: 'Chemical', name: 'Chlorpyrifos', amount: '0.5-1 liter/acre' }
                ],
                herbicides: [
                    { type: 'Pre-Emergent', name: 'Butachlor', amount: '0.5-1 kg/acre' },
                    { type: 'Post-Emergent', name: 'Bromoxynil', amount: '0.5-1 liter/acre' }
                ]
            }
        }
        // Add other crop categories for Kharif season (e.g., pulses, fruits, vegetables)...
    }
};

// Function to dynamically populate crops based on selected crop type and category
function populateCrops() {
    const cropType = document.getElementById('crop-type').value;
    const cropCategory = document.getElementById('crop-category').value;
    const cropSelection = document.getElementById('crop-selection');
    
    cropSelection.innerHTML = ''; // Clear previous options

    // Add default "Select a crop" option
    const defaultOption = document.createElement('option');
    defaultOption.value = 'none';
    defaultOption.textContent = 'Select a crop';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    cropSelection.appendChild(defaultOption);

    let crops = [];

    if (cropData[cropType] && cropData[cropType][cropCategory]) {
        crops = Object.keys(cropData[cropType][cropCategory]);
    }

    // Populate the crop selection dropdown
    crops.forEach(crop => {
        const option = document.createElement('option');
        option.value = crop;
        option.textContent = crop.charAt(0).toUpperCase() + crop.slice(1);
        cropSelection.appendChild(option);
    });
}

// Function to get all recommendations (fertilizer, pesticide, insecticide, herbicide)
function getFertilizerRecommendation() {
    const cropType = document.getElementById('crop-type').value;
    const cropCategory = document.getElementById('crop-category').value;
    const cropSelection = document.getElementById('crop-selection').value;

    if (!cropType || !cropCategory || !cropSelection) {
        alert('Please fill out all the fields.');
        return;
    }

    const selectedCrop = cropData[cropType][cropCategory][cropSelection];

    let recommendation = `<h3>Fertilizer Recommendations for ${cropSelection}:</h3>`;
    selectedCrop.fertilizers.forEach(fertilizer => {
        recommendation += `<p>${fertilizer.name}: ${fertilizer.amount}</p>`;
    });

    recommendation += `<h3>Pesticide Recommendations:</h3>`;
    selectedCrop.pesticides.forEach(pesticide => {
        recommendation += `<p>${pesticide.type} - ${pesticide.name}: ${pesticide.amount}</p>`;
    });

    recommendation += `<h3>Insecticide Recommendations:</h3>`;
    selectedCrop.insecticides.forEach(insecticide => {
        recommendation += `<p>${insecticide.type} - ${insecticide.name}: ${insecticide.amount}</p>`;
    });

    recommendation += `<h3>Herbicide Recommendations:</h3>`;
    selectedCrop.herbicides.forEach(herbicide => {
        recommendation += `<p>${herbicide.type} - ${herbicide.name}: ${herbicide.amount}</p>`;
    });

    document.getElementById('recommendation-output').innerHTML = recommendation;
}
