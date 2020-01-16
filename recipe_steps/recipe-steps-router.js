const express = require("express")

const RecipeSteps = require('./recipe-steps-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    RecipeSteps.find()
    .then(recipeStep =>{
        res.json(recipeStep)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get recipe steps'});
    })
})

module.exports = router;