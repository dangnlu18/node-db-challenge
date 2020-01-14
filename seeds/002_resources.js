
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, description: 'blah1', name: 'money'},
        {id: 2, description: 'blah2', name: 'time'},
        {id: 3, description: 'blah3', name: 'magic'}
      ]);
    });
};
