// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the 'Recipe' collection
const recipeSchema = new mongoose.Schema({
    id: Number, // Unique identifier for the recipe (can be optional)
    title: {
        type: String,
        required: true, // Title is a required field
    },
    imageURL: {
        type: String,
        required: true, // Image URL is a required field
    },
    description: {
        ingredients: [String], // An array of ingredients as strings
        instructions: [String], // An array of instructions as strings
    },
});

// Create a Mongoose model for the 'Recipe' collection using the defined schema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the 'Recipe' model for use in other parts of the application
module.exports = Recipe;
