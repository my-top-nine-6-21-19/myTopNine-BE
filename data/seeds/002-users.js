
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Tom', password: '$2a$04$6f4wiI1kqT5k9T5haei7RelGUyuJJHOOWfGHJAAAO9S/HUySyGS96', "is admin": true},
        {username: 'Joe', password: 'Lakers77', "is admin": false},
        {username: 'User', password: 'seed pw3', "is admin": false},
      ]);
    });
};
