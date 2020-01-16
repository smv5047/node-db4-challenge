const express = require("express")

const Ingredients = require('./ingredients-model.js')

const router = express.Router()

router.get('/', (req, res, next) => {
    Ingredients.find()
    .then(ingredients=>{
        res.json(ingredients)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get ingredients'});
    })
})

module.exports = router