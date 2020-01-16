
exports.up = async function(knex) {
await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("recipe_name").notNullable()
})

await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.string("ingredient_name").notNullable()
})

await knex.schema.createTable("recipe_details", (table) => {
    table.integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    table.integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    table.integer("ingredient_quantity").notNullable()
    table.primary(["recipe_id", "ingredient_id"])
})

await knex.schema.createTable("recipe_steps", (table) => {
    table.integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    table.integer("recipe_step_number").notNullable()
    table.string("recipe_step_description").notNullable()
    table.primary(["recipe_id", "recipe_step_number"])
    })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_steps")
  await knex.schema.dropTableIfExists("recipe_details")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
