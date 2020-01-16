
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {recipe_id: 1, recipe_step_number: 1, recipe_step_description: "Turn on Oven"},
        {recipe_id: 1, recipe_step_number: 2, recipe_step_description: "Turn off Oven"},
        {recipe_id: 2, recipe_step_number: 1, recipe_step_description: "Get Toaster"},
      ]);
    });
};