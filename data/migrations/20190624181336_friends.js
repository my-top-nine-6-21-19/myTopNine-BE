
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
        tbl.integer('rank').notNullable();
        tbl.text('description').notNullable()
        tbl.string('email', 128).notNullable();
        tbl.string('phone',128).notNullable();
        tbl.string('address', 128).notNullable();
        tbl.string('picture', 250).notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('friends')
  };
  