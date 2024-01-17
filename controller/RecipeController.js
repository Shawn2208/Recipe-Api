const Recipe = require('../model/RecipeSchema');



// Controller function to create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        // Create a new recipe with data from the request body
        const newRecipe = new Recipe(req.body);

        // Save the recipe to the database
        const createdRecipe = await newRecipe.save();

        // Send back the created recipe with a 201 status code
        res.status(201).json(createdRecipe);
    } catch (error) {
        // If an error occurs, send back an error message with a 400 status code
        res.status(400).json({
            error: error,
            message: 'Error creating new recipe'
        });
    }
};



// Controller function to get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        // Find all recipes in the database
        const recipes = await Recipe.find();

        // Send back the recipes with a 200 status code
        res.status(200).json(recipes);
    } catch (error) {
        // If an error occurs, send back an error message with a 500 status code
        res.status(500).json({
            error: error,
            message: 'Error fetching recipes'
        });
    }
};



// Controller function to get a recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        // Retrieve the recipe ID from the URL parameters
        const recipeId = req.params.id;

        // Find the recipe in the database by its ID
        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({
                message: 'Recipe not found'
            });
        }

        // Send back the recipe with a 200 status code
        res.status(200).json(recipe);
    } catch (error) {
        // If an error occurs (including cast errors for invalid IDs), send back an error message
        res.status(500).json({
            error: error,
            message: 'Error fetching recipe'
        });
    }
};



// Controller function to update a recipe by ID
exports.updateRecipeById = async (req, res) => {
    try {
        // Retrieve the recipe ID from the URL parameters
        const recipeId = req.params.id.trim();

        // Update the recipe in the database
        // Option 'new: true' ensures the updated document is returned
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({
                message: 'Recipe not found'
            });
        }

        // Send back the updated recipe with a 200 status code
        res.status(200).json(updatedRecipe);
    } catch (error) {
        // If an error occurs, send back an error message
        res.status(500).json({
            error: error,
            message: 'Error updating recipe'
        });
    }
};



// Controller function to delete a recipe by ID
exports.deleteRecipeById = async (req, res) => {
    try {
        // Retrieve the recipe ID from the URL parameters
        const recipeId = req.params.id.trim();

        // Find the recipe by ID and delete it
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)

        if (!deletedRecipe) {
            return res.status(404).json({
                message: 'Recipe not found'
            });
        }

        // Send a success message with a 200 status code
        res.status(200).json({
            message: 'Recipe deleted successfully'
        });
    } catch (error) {
        // If an error occurs, send back an error message
        res.status(500).json({
            error: error,
            message: 'Error deleting recipe'
        });
    }
};
