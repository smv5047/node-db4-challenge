const express = require("express")

const Recipes = require('./scheme-model.js')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.find()
    .then(schemes =>{

    })
    .catch()
})

module.exports = router