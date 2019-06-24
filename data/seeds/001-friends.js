
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {users_id:1, name: 'test2', rank: 9, description: "test desc " }, 
        {users_id: 1, name: 'test2', rank: 2, description: "test desc " }
      ]);
    });
};
