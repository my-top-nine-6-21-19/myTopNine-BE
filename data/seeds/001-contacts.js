
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {friend_id: 2, email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA'}
       
      ]);
    });
};
