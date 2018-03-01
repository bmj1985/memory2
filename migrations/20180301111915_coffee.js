
exports.up = function (knex, Promise) {
  return knex.schema.createTable('coffee', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('roaster');
    table.integer('aroma');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('coffee');
};
