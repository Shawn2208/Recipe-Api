# Example payload

{
    "title": "Recipe Title",
    "imageURL": "Image URL",
    "description": {
        "ingredients": [
            "Ingredient 1",
            "Ingredient 2",
            "Ingredient 3",
            "Ingredient 4",
            "Ingredient 5",
            "Ingredient 6",
            "Ingredient 7",
            "Ingredient 8"
        ],
        "instructions": [
            "Step 1: Instruction 1",
            "Step 2: Instruction 2",
            "Step 3: Instruction 3",
            "Step 4: Instruction 4",
            "Step 5: Instruction 5",
            "Step 6: Instruction 6"
        ]
    }
}



Endpoints: 

Create Recipe: Document the POST /api/recipes endpoint, including the expected request format (JSON) and what it does.

Get All Recipes: Document the GET /api/recipes endpoint to retrieve all recipes.

Get Recipe by ID: Document the GET /api/recipes/:id endpoint to retrieve a specific recipe by its ID.

Update Recipe by ID: Document the PUT /api/recipes/:id endpoint to update a recipe by its ID.

Delete Recipe by ID: Document the DELETE /api/recipes/:id endpoint to delete a recipe by its ID.



Recipe API:

1. Create Recipe

Endpoint: POST /api/recipes

Description: This endpoint allows you to create a new recipe.


Request Format (JSON):


{
    "title": "Recipe Title",
    "imageURL": "Image URL",
    "description": {
        "ingredients": [
            "Ingredient 1",
            "Ingredient 2",
            "Ingredient 3",
            ...
        ],
        "instructions": [
            "Step 1: Instruction 1",
            "Step 2: Instruction 2",
            "Step 3: Instruction 3",
            ...
        ]
    }
}


Response Format (JSON):


{
    "title": "Recipe Title",
    "imageURL": "Image URL",
    "description": {
        "ingredients": [
            "Ingredient 1",
            "Ingredient 2",
            "Ingredient 3",
            ...
        ],
        "instructions": [
            "Step 1: Instruction 1",
            "Step 2: Instruction 2",
            "Step 3: Instruction 3",
            ...
        ]
    }
}


Example Request:


POST /api/recipes


{
    "title": "Spaghetti Carbonara",
    "imageURL": "https://example.com/spaghetti-carbonara.jpg",
    "description": {
        "ingredients": [
            "200g spaghetti",
            "2 eggs",
            "100g pancetta",
            "50g Pecorino cheese",
            "50g Parmesan cheese",
            "2 cloves garlic",
            "Salt and pepper to taste"
        ],
        "instructions": [
            "Cook spaghetti until al dente. Reserve some pasta water.",
            "In a pan, cook pancetta and garlic.",
            "Whisk eggs and cheese. Add hot pasta and toss.",
            "Add pancetta mixture. Season with salt and pepper.",
            "If too dry, add reserved pasta water. Serve immediately."
        ]
    }
}


Example Response:



{
    "title": "Spaghetti Carbonara",
    "imageURL": "https://example.com/spaghetti-carbonara.jpg",
    "description": {
        "ingredients": [
            "200g spaghetti",
            "2 eggs",
            "100g pancetta",
            "50g Pecorino cheese",
            "50g Parmesan cheese",
            "2 cloves garlic",
            "Salt and pepper to taste"
        ],
        "instructions": [
            "Cook spaghetti until al dente. Reserve some pasta water.",
            "In a pan, cook pancetta and garlic.",
            "Whisk eggs and cheese. Add hot pasta and toss.",
            "Add pancetta mixture. Season with salt and pepper.",
            "If too dry, add reserved pasta water. Serve immediately."
        ]
    }
}


2. Get All Recipes

Endpoint: GET /api/recipes

Description: This endpoint retrieves a list of all recipes.


Response Format (JSON):


[
    {
        "title": "Recipe Title 1",
        "imageURL": "Image URL 1",
        "description": {
            "ingredients": [...],
            "instructions": [...]
        }
    },
    {
        "title": "Recipe Title 2",
        "imageURL": "Image URL 2",
        "description": {
            "ingredients": [...],
            "instructions": [...]
        }
    },
    ...
]


Example Response:


[
    {
        "title": "Spaghetti Carbonara",
        "imageURL": "https://example.com/spaghetti-carbonara.jpg",
        "description": {
            "ingredients": [
                "200g spaghetti",
                "2 eggs",
                ...
            ],
            "instructions": [
                "Cook spaghetti until al dente. Reserve some pasta water.",
                ...
            ]
        }
    },
    {
        "title": "Chicken Tacos",
        "imageURL": "https://example.com/chicken-tacos.jpg",
        "description": {
            "ingredients": [
                "1 lb boneless, skinless chicken breasts, cut into strips",
                "1 tablespoon olive oil",
                ...
            ],
            "instructions": [
                "Heat olive oil in a pan over medium-high heat.",
                ...
            ]
        }
    },
    ...
]


3. Get Recipe by ID


Endpoint: GET /api/recipes/:id


Description: This endpoint retrieves a specific recipe by its ID.

Response Format (JSON):


{
    "title": "Recipe Title",
    "imageURL": "Image URL",
    "description": {
        "ingredients": [...],
        "instructions": [...]
    }
}


Example Response:



{
    "title": "Spaghetti Carbonara",
    "imageURL": "https://example.com/spaghetti-carbonara.jpg",
    "description": {
        "ingredients": [
            "200g spaghetti",
            "2 eggs",
            ...
        ],
        "instructions": [
            "Cook spaghetti until al dente. Reserve some pasta water.",
            ...
        ]
    }
}


4. Update Recipe by ID

Endpoint: PUT /api/recipes/:id

Description: This endpoint allows you to update a recipe by its ID.

Request Format (JSON):


{
    "title": "Updated Recipe Title",
    "imageURL": "Updated Image URL",
    "description": {
        "ingredients": [...],
        "instructions": [...]
    }
}


Response Format (JSON):


{
    "title": "Updated Recipe Title",
    "imageURL": "Updated Image URL",
    "description": {
        "ingredients": [...],
        "instructions": [...]
    }
}


Example Request:


PUT /api/recipes/12345


{
    "title": "Updated Spaghetti Carbonara",
    "imageURL": "https://example.com/updated-spaghetti-carbonara.jpg",
    "description": {
        "ingredients": [
            "250g spaghetti",
            "3 eggs",
            ...
        ],
        "instructions": [
            "Cook spaghetti until al dente. Reserve some pasta water.",
            ...
        ]
    }
}


Example Response:


{
    "title": "Updated Spaghetti Carbonara",
    "imageURL": "https://example.com/updated-spaghetti-carbonara.jpg",
    "description": {
        "ingredients": [
            "250g spaghetti",
            "3 eggs",
            ...
        ],
        "instructions": [
            "Cook spaghetti until al dente. Reserve some pasta water.",
            ...
        ]
    }
}


5. Delete Recipe by ID

Endpoint: DELETE /api/recipes/:id

Description: This endpoint allows you to delete a recipe by its ID.

# Response Format (JSON):

{
    "message": "Recipe deleted successfully"
}

Example Response:


{
    "message": "Recipe deleted successfully"
}