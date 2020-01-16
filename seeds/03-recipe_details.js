
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        {ingredient_quantity: 6}
      ]);
    });
};
