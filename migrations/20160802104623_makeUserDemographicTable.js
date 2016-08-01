
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_demographics', function (table) {
    table.increments('id');
    table.integer('user_id');
    table.integer('age');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_demographics')
};
