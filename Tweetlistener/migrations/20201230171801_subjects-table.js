
exports.up = function(knex) {
  return knex.schema.createTable('subjects', function (table) {
    table.increments();
    table.string('name').notNullable().index();
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('subjects')
};
