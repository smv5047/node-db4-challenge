const express = require("express")
const RecipeRouter = require('./recipes/recipes-router')
const IngredientRouter = require('./ingredients/ingredients-router')
const RecipeStepsRouter = require('./recipe_steps/recipe-steps-router')
const server =express()

const PORT = process.env.PORT || 4010


server.use(express.json())
server.use('/api/recipes', RecipeRouter)
server.use('/api/recipesteps', RecipeStepsRouter)
server.use('/api/ingredients', IngredientRouter)

server.get('/', (req, res) => {
    res.send("This is your server speaking")
})

server.listen(PORT, () => {
    
    console.log(`Listening on port ${PORT}...`)
})

