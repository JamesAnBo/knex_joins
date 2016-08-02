
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 8, name: 'Orinocco', user_demographics_id: 1}),
        knex('users').insert({id: 12, name: 'Tomsk', user_demographics_id: 1}),
        knex('users').insert({id: 3, name: 'Uncle Bulgaria', user_demographics_id: 3})
      ]);
    });
};
