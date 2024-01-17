// Load environment variables from a .env file if present
require('dotenv').config();

// Import required libraries and modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import the recipe controller to handle API requests
const recipeController = require('./controller/RecipeController');

// Connect to the MongoDB database using the provided URL
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log(`MongoDB connection Error ${err}`);
});

// Create an instance of the Express application
const app = express();

// Use JSON middleware for parsing request bodies
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS) for allowing requests from different domains
app.use(cors());

// Define API routes

// Route for Creating a new Recipe (POST request)
app.post('/api/recipes', recipeController.createRecipe);

// Route for getting all recipes (GET request)
app.get('/api/recipes', recipeController.getAllRecipes);

// Route for getting a single recipe by ID (GET request)
app.get('/api/recipes/:id', recipeController.getRecipeById);

// Route for updating a single recipe by ID (PUT request)
app.put('/api/recipes/:id', recipeController.updateRecipeById);

// Route for deleting a recipe by ID (DELETE request)
app.delete('/api/recipes/:id', recipeController.deleteRecipeById);

// Define the port for the server, using the provided PORT environment variable or defaulting to port 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// TODO: Document the code further, including any additional endpoints or middleware as needed
