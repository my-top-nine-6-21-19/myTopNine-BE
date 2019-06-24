
exports.up = function(knex, Promise) {
    return knex.schema.createTable('friends', tbl =>{
        tbl.increments();
        tbl
          .integer('users_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');

        tbl.string('name', 200).notNullable()
        tbl.integer('rank').notNullable().unique()
        tbl.text('description').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema(dropTableIfExists('friends'))
  };
  