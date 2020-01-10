const express = require("express")
const db = require("./data/db-config")
const RecipeRouter = require('./recipes/recipes-router')
const server =express()

const port = process.env.PORT || 4010

server.use(express.json())
server.use('/api/recipes', RecipeRouter)

server.listen(PORT, () => {
    
    console.log(`Listening on port ${PORT}...`)
})