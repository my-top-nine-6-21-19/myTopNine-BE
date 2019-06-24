
exports.up = function(knex, Promise) {
  return knex.schema.table('users', users =>{
      users.dropColumn('department');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', users =>{
    users.string('department', 200).notNullable();
  })
};
