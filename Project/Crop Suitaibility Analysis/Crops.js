const data = {
    "Maharashtra": {
        soils: {
            "Black Soil": {
                climate: ["semi-arid", "tropical"],
                seasons: {
                    "summer": ["Cotton", "Jowar", "Bajra", "Pulses"],
                    "monsoon": ["Jowar", "Pulses"],
                    "winter": ["Wheat"]
                }
            },
            "Red Soil": {
                climate: ["semi-arid"],
                seasons: {
                    "summer": ["Groundnut", "Ragi", "Pulses"],
                    "monsoon": ["Pulses"],
                    "winter": ["Ragi"]
                }
            },
            "Alluvial Soil": {
                climate: ["sub-tropical"],
                seasons: {
                    "summer": ["Rice"],
                    "monsoon": ["Sugarcane"],
                    "winter": ["Wheat"]
                }
            }
        }
    },
    "Punjab": {
        soils: {
            "Alluvial Soil": {
                climate: ["sub-tropical", "semi-arid"],
                seasons: {
                    "summer": ["Cotton"],
                    "monsoon": ["Rice"],
                    "winter": ["Wheat"]
                }
            }
        }
    },
    "Rajasthan": {
        soils: {
            "Sandy Soil": {
                climate: ["arid"],
                seasons: {
                    "summer": ["Bajra"],
                    "monsoon": ["Millet"],
                    "winter": ["Pulses"]
                }
            },
            "Red Soil": {
                climate: ["semi-arid"],
                seasons: {
                    "summer": ["Maize"],
                    "monsoon": ["Wheat"],
                    "winter": ["Pulses"]
                }
            }
        }
    },
    "Tamil Nadu": {
        soils: {
            "Red Soil": {
                climate: ["tropical", "sub-tropical"],
                seasons: {
                    "summer": ["Groundnut", "Ragi", "Millets"],
                    "monsoon": ["Millets"],
                    "winter": ["Ragi"]
                }
            },
            "Black Soil": {
                climate: ["semi-arid"],
                seasons: {
                    "summer": ["Cotton", "Maize", "Sorghum"],
                    "monsoon": ["Sorghum"],
                    "winter": ["Maize"]
                }
            },
            "Alluvial Soil": {
                climate: ["tropical-humid"],
                seasons: {
                    "summer": ["Rice"],
                    "monsoon": ["Sugarcane"],
                    "winter": ["Banana"]
                }
            }
        }
    },
    "West Bengal": {
        soils: {
            "Alluvial Soil": {
                climate: ["tropical-humid"],
                seasons: {
                    "summer": ["Rice"],
                    "monsoon": ["Jute", "Sugarcane"],
                    "winter": ["Rice"]
                }
            },
            "Laterite Soil": {
                climate: ["tropical", "sub-tropical"],
                seasons: {
                    "summer": ["Tea"],
                    "monsoon": ["Tea", "Spices"],
                    "winter": ["Spices"]
                }
            }
        }
    },
    "Uttar Pradesh": {
        soils: {
            "Alluvial Soil": {
                climate: ["sub-tropical"],
                seasons: {
                    "summer": ["Wheat", "Rice"],
                    "monsoon": ["Sugarcane"],
                    "winter": ["Barley", "Maize"]
                }
            }
        }
    },
    "Madhya Pradesh": {
        soils: {
            "Black Soil": {
                climate: ["semi-arid"],
                seasons: {
                    "summer": ["Cotton", "Soybean"],
                    "monsoon": ["Wheat"],
                    "winter": ["Soybean"]
                }
            },
            "Red Soil": {
                climate: ["sub-tropical"],
                seasons: {
                    "summer": ["Pulses", "Groundnut"],
                    "monsoon": ["Millets"],
                    "winter": ["Pulses"]
                }
            }
        }
    },
    "Bihar": {
        soils: {
            "Alluvial Soil": {
                climate: ["sub-tropical"],
                seasons: {
                    "summer": ["Wheat", "Rice"],
                    "monsoon": ["Maize"],
                    "winter": ["Sugarcane", "Pulses"]
                }
            }
        }
    },
    "Gujarat": {
        soils: {
            "Black Soil": {
                climate: ["semi-arid"],
                seasons: {
                    "summer": ["Cotton", "Groundnut"],
                    "monsoon": ["Pulses"],
                    "winter": ["Wheat"]
                }
            },
            "Sandy Soil": {
                climate: ["arid"],
                seasons: {
                    "summer": ["Bajra"],
                    "monsoon": ["Jowar"],
                    "winter": ["Pulses"]
                }
            }
        }
    },
    "Karnataka": {
        soils: {
            "Red Soil": {
                climate: ["sub-humid", "semi-arid"],
                seasons: {
                    "summer": ["Ragi", "Groundnut", "Cotton"],
                    "monsoon": ["Ragi"],
                    "winter": ["Cotton"]
                }
            },
            "Laterite Soil": {
                climate: ["tropical-monsoon"],
                seasons: {
                    "summer": ["Coffee"],
                    "monsoon": ["Tea", "Spices"],
                    "winter": ["Rubber"]
                }
            }
        }
    },
    "Kerala": {
        soils: {
            "Laterite Soil": {
                climate: ["tropical-monsoon"],
                seasons: {
                    "summer": ["Tea", "Rubber"],
                    "monsoon": ["Tea", "Coffee"],
                    "winter": ["Rubber"]
                }
            },
            "Alluvial Soil": {
                climate: ["tropical-humid"],
                seasons: {
                    "summer": ["Rice", "Coconut"],
                    "monsoon": ["Coconut"],
                    "winter": ["Bananas"]
                }
            }
        }
    },
    "Odisha": {
        soils: {
            "Red Soil": {
                climate: ["sub-tropical"],
                seasons: {
                    "summer": ["Rice"],
                    "monsoon": ["Pulses"],
                    "winter": ["Groundnut"]
                }
            },
            "Laterite Soil": {
                climate: ["tropical-monsoon"],
                seasons: {
                    "summer": ["Tea"],
                    "monsoon": ["Spices"],
                    "winter": ["Tea"]
                }
            },
            "Alluvial Soil": {
                climate: ["sub-tropical-humid"],
                seasons: {
                    "summer": ["Rice"],
                    "monsoon": ["Jute"],
                    "winter": ["Sugarcane"]
                }
            }
        }
    },
    "Haryana": {
        soils: {
            "Alluvial Soil": {
                climate: ["semi-arid", "sub-tropical"],
                seasons: {
                    "summer": ["Wheat", "Rice"],
                    "monsoon": ["Sugarcane"],
                    "winter": ["Barley", "Pulses"]
                }
            }
        }
    },
    "Jharkhand": {
    soils: {
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Maize", "Pulses"],
          "monsoon": ["Pulses", "Millets"],
          "winter": ["Wheat", "Pulses"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Coffee", "Millets"],
          "monsoon": ["Tea", "Coffee"],
          "winter": ["Fruits"]
        }
      },
      "Forest Soil": {
        climate: ["sub-tropical humid"],
        seasons: {
          "summer": ["Wheat", "Pulses", "Fruits"],
          "monsoon": ["Pulses", "Millets"],
          "winter": ["Fruits", "Vegetables"]
        }
      }
    }
  },
  "Assam": {
    soils: {
      "Alluvial Soil": {
        climate: ["tropical humid"],
        seasons: {
          "summer": ["Rice", "Jute", "Sugarcane"],
          "monsoon": ["Rice", "Jute"],
          "winter": ["Vegetables", "Wheat"]
        }
      },
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Tea", "Coffee", "Oranges"],
          "monsoon": ["Rice"],
          "winter": ["Vegetables"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Rubber"],
          "monsoon": ["Tea", "Cashew"],
          "winter": ["Spices"]
        }
      }
    }
  },
  "Chhattisgarh": {
    soils: {
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Maize", "Pulses"],
          "monsoon": ["Pulses", "Millets"],
          "winter": ["Wheat", "Pulses"]
        }
      },
      "Black Soil": {
        climate: ["semi-arid"],
        seasons: {
          "summer": ["Cotton", "Wheat", "Oilseeds"],
          "monsoon": ["Cotton"],
          "winter": ["Wheat"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Coffee", "Millets"],
          "monsoon": ["Millets"],
          "winter": ["Tea", "Spices"]
        }
      }
    }
  },
  "Andhra Pradesh": {
    soils: {
      "Red Soil": {
        climate: ["tropical", "sub-tropical"],
        seasons: {
          "summer": ["Groundnut", "Rice", "Cotton"],
          "monsoon": ["Rice", "Cotton"],
          "winter": ["Groundnut", "Rice"]
        }
      },
      "Black Soil": {
        climate: ["semi-arid"],
        seasons: {
          "summer": ["Cotton", "Maize", "Sugarcane"],
          "monsoon": ["Cotton"],
          "winter": ["Maize"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Coconut", "Coffee", "Tea"],
          "monsoon": ["Rice"],
          "winter": ["Sugarcane"]
        }
      },
      "Alluvial Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Wheat", "Sugarcane"],
          "monsoon": ["Sugarcane"],
          "winter": ["Rice", "Wheat"]
        }
      }
    }
  },
  "Telangana": {
    soils: {
      "Black Soil": {
        climate: ["semi-arid"],
        seasons: {
          "summer": ["Cotton", "Maize", "Sorghum"],
          "monsoon": ["Maize", "Sorghum"],
          "winter": ["Cotton"]
        }
      },
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Groundnut", "Pulses", "Millets"],
          "monsoon": ["Pulses"],
          "winter": ["Millets"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Coffee", "Fruits"],
          "monsoon": ["Tea", "Fruits"],
          "winter": ["Spices"]
        }
      }
    }
  },
  "Himachal Pradesh": {
    soils: {
      "Mountain Soil": {
        climate: ["temperate"],
        seasons: {
          "summer": ["Apples", "Plums", "Barley"],
          "monsoon": ["Pulses"],
          "winter": ["Vegetables"]
        }
      },
      "Alluvial Soil": {
        climate: ["sub-temperate"],
        seasons: {
          "summer": ["Rice", "Wheat", "Sugarcane"],
          "monsoon": ["Rice"],
          "winter": ["Wheat"]
        }
      },
      "Forest Soil": {
        climate: ["sub-alpine"],
        seasons: {
          "summer": ["Pulses", "Maize", "Vegetables"],
          "monsoon": ["Vegetables"],
          "winter": ["Fruits"]
        }
      }
    }
  },
  "Uttarakhand": {
    soils: {
      "Mountain Soil": {
        climate: ["temperate", "alpine"],
        seasons: {
          "summer": ["Apples", "Plums", "Barley"],
          "monsoon": ["Barley"],
          "winter": ["Vegetables"]
        }
      },
      "Alluvial Soil": {
        climate: ["sub-tropical", "temperate"],
        seasons: {
          "summer": ["Rice", "Wheat", "Sugarcane"],
          "monsoon": ["Rice"],
          "winter": ["Wheat"]
        }
      },
      "Forest Soil": {
        climate: ["sub-alpine"],
        seasons: {
          "summer": ["Pulses", "Maize", "Vegetables"],
          "monsoon": ["Vegetables"],
          "winter": ["Fruits"]
        }
      }
    }
  },
  "Manipur": {
    soils: {
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Pulses", "Oilseeds"],
          "monsoon": ["Rice"],
          "winter": ["Pulses"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Rubber", "Fruits"],
          "monsoon": ["Rubber"],
          "winter": ["Tea"]
        }
      },
      "Alluvial Soil": {
        climate: ["tropical"],
        seasons: {
          "summer": ["Rice", "Maize", "Jute"],
          "monsoon": ["Jute"],
          "winter": ["Wheat"]
        }
      }
    }
  },
  "Meghalaya": {
    soils: {
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Rubber", "Pineapple"],
          "monsoon": ["Tea"],
          "winter": ["Fruits"]
        }
      },
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Maize", "Potatoes"],
          "monsoon": ["Rice"],
          "winter": ["Vegetables"]
        }
      },
      "Forest Soil": {
        climate: ["sub-alpine", "temperate"],
        seasons: {
          "summer": ["Spices", "Oranges"],
          "monsoon": ["Oranges"],
          "winter": ["Vegetables"]
        }
      }
    }
  },
  "Nagaland": {
    soils: {
      "Forest Soil": {
        climate: ["sub-tropical", "temperate"],
        seasons: {
          "summer": ["Rice", "Maize", "Millet"],
          "monsoon": ["Millet"],
          "winter": ["Vegetables"]
        }
      },
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Tea", "Coffee", "Rubber"],
          "monsoon": ["Coffee"],
          "winter": ["Tea"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical"],
        seasons: {
          "summer": ["Tea", "Sugarcane", "Fruits"],
          "monsoon": ["Tea"],
          "winter": ["Fruits"]
        }
      }
    }
  },
  "Mizoram": {
    soils: {
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Pulses", "Oilseeds"],
          "monsoon": ["Rice"],
          "winter": ["Pulses"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Coffee", "Fruits"],
          "monsoon": ["Rubber"],
          "winter": ["Tea"]
        }
      },
      "Forest Soil": {
        climate: ["sub-tropical", "temperate"],
        seasons: {
          "summer": ["Spices", "Oranges", "Pineapple"],
          "monsoon": ["Spices"],
          "winter": ["Vegetables"]
        }
      }
    }
  },
  "Tripura": {
    soils: {
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Jute", "Oilseeds"],
          "monsoon": ["Rice"],
          "winter": ["Pulses"]
        }
      },
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Tea", "Rubber", "Sugarcane"],
          "monsoon": ["Sugarcane"],
          "winter": ["Tea"]
        }
      },
      "Alluvial Soil": {
        climate: ["tropical humid"],
        seasons: {
          "summer": ["Rice", "Pulses", "Maize"],
          "monsoon": ["Pulses"],
          "winter": ["Vegetables"]
        }
      }
    }
  },
  "Sikkim": {
    soils: {
      "Mountain Soil": {
        climate: ["alpine", "temperate"],
        seasons: {
          "summer": ["Maize", "Wheat", "Barley"],
          "monsoon": ["Maize"],
          "winter": ["Barley"]
        }
      },
      "Forest Soil": {
        climate: ["temperate", "sub-alpine"],
        seasons: {
          "summer": ["Cardamom", "Ginger", "Tea"],
          "monsoon": ["Tea"],
          "winter": ["Fruits"]
        }
      },
      "Red Soil": {
        climate: ["sub-tropical", "temperate"],
        seasons: {
          "summer": ["Rice", "Maize", "Pulses"],
          "monsoon": ["Rice"],
          "winter": ["Vegetables"]
        }
      }
    }
  },
  "Goa": {
    soils: {
      "Laterite Soil": {
        climate: ["tropical monsoon"],
        seasons: {
          "summer": ["Rice", "Cashew", "Coconut"],
          "monsoon": ["Cashew"],
          "winter": ["Fruits"]
        }
      },
      "Sandy Soil": {
        climate: ["coastal"],
        seasons: {
          "summer": ["Cashew", "Coconut", "Fruits"],
          "monsoon": ["Coconut"],
          "winter": ["Fruits"]
        }
      },
      "Alluvial Soil": {
        climate: ["tropical"],
        seasons: {
          "summer": ["Rice", "Sugarcane", "Pulses"],
          "monsoon": ["Rice"],
          "winter": ["Vegetables"]
        }
      }
    }
  },
  "Arunachal Pradesh": {
    soils: {
      "Forest Soil": {
        climate: ["sub-alpine", "temperate"],
        seasons: {
          "summer": ["Tea", "Oranges", "Apples"],
          "monsoon": ["Apples"],
          "winter": ["Fruits"]
        }
      },
      "Red Soil": {
        climate: ["sub-tropical"],
        seasons: {
          "summer": ["Rice", "Millet", "Pulses"],
          "monsoon": ["Rice"],
          "winter": ["Vegetables"]
        }
      },
      "Alluvial Soil": {
        climate: ["tropical humid"],
        seasons: {
          "summer": ["Rice", "Maize", "Sugarcane"],
          "monsoon": ["Rice"],
          "winter": ["Maize"]
        }
      }
    }
  },
  "Jammu & Kashmir": {
    soils: {
      "Mountain Soil": {
        climate: ["alpine", "temperate"],
        seasons: {
          "summer": ["Apples", "Pears", "Walnuts"],
          "monsoon": ["Apples"],
          "winter": ["Cherries"]
        }
      },
      "Alluvial Soil": {
        climate: ["sub-temperate"],
        seasons: {
          "summer": ["Wheat", "Rice", "Maize"],
          "monsoon": ["Rice"],
          "winter": ["Vegetables"]
        }
      },
      "Forest Soil": {
        climate: ["sub-alpine", "temperate"],
        seasons: {
          "summer": ["Pulses", "Maize", "Vegetables"],
          "monsoon": ["Vegetables"],
          "winter": ["Fruits"]
        }
      }
    }
  }
};




// Function to update soil types based on selected state
function updateSoilTypes() {
    const state = document.getElementById('area').value;
    const soilTypeSelect = document.getElementById('soil-type');
    
    // Clear the soil type dropdown
    soilTypeSelect.innerHTML = '<option value="none" selected disabled>Select soil type</option>';
    
    if (state !== "none" && data[state]) {
        // Get the soil types for the selected state
        const soils = data[state].soils;
        
        // Populate soil types in the dropdown
        for (let soil in soils) {
            let option = document.createElement('option');
            option.value = soil;
            option.textContent = soil;
            soilTypeSelect.appendChild(option);
        }

        // Enable the soil type dropdown
        soilTypeSelect.disabled = false;
    } else {
        // Disable the soil type dropdown if no state selected
        soilTypeSelect.disabled = true;
    }
    
    // Clear and disable climate dropdown until a soil type is selected
    const climateSelect = document.getElementById('climate');
    climateSelect.innerHTML = '<option value="none" selected disabled>Select the climate</option>';
    climateSelect.disabled = true;
}

// Function to update climate options based on selected soil type
function updateClimateOptions() {
    const state = document.getElementById('area').value;
    const soilType = document.getElementById('soil-type').value;
    const climateSelect = document.getElementById('climate');
    
    // Clear the climate dropdown
    climateSelect.innerHTML = '<option value="none" selected disabled>Select the climate</option>';
    
    if (state !== "none" && soilType !== "none" && data[state] && data[state].soils[soilType]) {
        // Get the climates for the selected soil type
        const climates = data[state].soils[soilType].climate;
        
        // Populate climates in the dropdown
        climates.forEach(climate => {
            let option = document.createElement('option');
            option.value = climate;
            option.textContent = climate.charAt(0).toUpperCase() + climate.slice(1); // Capitalize the first letter
            climateSelect.appendChild(option);
        });

        // Enable the climate dropdown
        climateSelect.disabled = false;
    } else {
        // Disable the climate dropdown if no valid soil type is selected
        climateSelect.disabled = true;
    }
}

// Function to get crop recommendation
function getCropRecommendation() {
    const area = document.getElementById('area').value;
    const soilType = document.getElementById('soil-type').value;
    const climate = document.getElementById('climate').value.toLowerCase(); // Convert climate input to lowercase
    const season = document.getElementById('season').value.toLowerCase(); // Convert season input to lowercase
    const recommendationOutput = document.getElementById('crop-recommendation');
    
    if (area === "none" || soilType === "none" || climate === "none" || season === "none") {
        recommendationOutput.textContent = "Please fill out all fields.";
        return;
    }

    const areaData = data[area];

    if (areaData && areaData.soils[soilType]) {
        const soilData = areaData.soils[soilType];

        // Check if the selected climate matches the suitable climates for the chosen soil type (case insensitive)
        const climateMatch = soilData.climate.map(c => c.toLowerCase()).includes(climate);
        if (!climateMatch) {
            recommendationOutput.textContent = `The selected climate doesn't support this area for ${soilType}.`;
        } else {
            // Check if the season is supported
            if (!soilData.seasons[season]) {
                recommendationOutput.textContent = `The selected season doesn't support this area for ${soilType}.`;
            } else {
                const suitableCrops = soilData.seasons[season];
                recommendationOutput.textContent = `Suitable crops for ${soilType} in ${area} during the ${season} season: ${suitableCrops.join(', ')}`;
            }
        }
    } else {
        recommendationOutput.textContent = "The selected area or soil type is not available in the data.";
    }
}

// Add event listeners to trigger soil type and climate updates
document.getElementById('area').addEventListener('change', updateSoilTypes);
document.getElementById('soil-type').addEventListener('change', updateClimateOptions);
