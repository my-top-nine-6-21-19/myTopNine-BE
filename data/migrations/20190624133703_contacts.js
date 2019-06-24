
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', function(contacts) {
        contacts.increments();
    
        contacts
          .integer('friend_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('friends')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    
        contacts.string('email', 128).notNullable();
        contacts.string('phone',128).notNullable();
        contacts.string('address', 128).notNullable();
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contacts')
};
