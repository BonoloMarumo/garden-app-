// Function to get advice based on season
function getAdviceBySeason(season) {
    const seasonAdvice = {
        summer: "Water your plants regularly and provide some shade.\n",
        winter: "Protect your plants from frost with covers.\n",
    };
    return seasonAdvice[season] || "No advice for this season.\n";
}

// Function to get advice based on plant type
function getAdviceByPlantType(plantType) {
    const plantTypeAdvice = {
        flower: "Use fertiliser to encourage blooms.",
        vegetable: "Keep an eye out for pests!",
    };
    return plantTypeAdvice[plantType] || "No advice for this type of plant.";
}

// Combined function to generate gardening advice
function generateGardeningAdvice(season, plantType) {
    return getAdviceBySeason(season) + getAdviceByPlantType(plantType);
}

// Replace hardcoded values with variables for future interactivity
let season = "summer"; // TODO: Replace with user input (e.g., prompt or form)
let plantType = "flower"; // TODO: Replace with user input (e.g., prompt or form)

// Log the advice to the console
console.log(generateGardeningAdvice(season, plantType));

// TODO: Further enhancements:
// - Add error handling for invalid inputs.
// - Expand advice database for more plant types and seasons.
// - Integrate a user-friendly interface for interactive advice.
