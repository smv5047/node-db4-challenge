const db = require("../data/db-config")

function find() {
    return db("recipe_steps")
    
}


module.exports = {
    find
}