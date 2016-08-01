
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_demographics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_demographics').insert({id: 1, user_id: 8, age: 3}),
        knex('user_demographics').insert({id: 2, user_id: 12, age: 4}),
        knex('user_demographics').insert({id: 3, user_id: 3, age: 61}),
        ]);
    });
};
