
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.integer('user_demographics_id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('user_demographics_id');
    })
};
