
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: 'test2', rank: 9, description: "test desc " }, 
        {name: 'test2', rank: 2, description: "test desc " }
      ]);
    });
};
