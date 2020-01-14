
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'science', description: 'something 1', completed: 0},
        {id: 2, name: 'math', description: 'something 2', completed: 1},
        {id: 3, name: 'english', description: 'something 3', completed: 0}
      ]);
    });
};
