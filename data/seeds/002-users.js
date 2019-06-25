
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Tom', password: 'drowssap'},
        {username: 'Joe', password: 'Lakers77'},
        {username: 'User', password: 'seed pw3'},
      ]);
    });
};
