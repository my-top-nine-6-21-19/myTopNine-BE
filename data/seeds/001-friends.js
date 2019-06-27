
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {users_id:1, name: 'John', rank: 1, description: "work friend",email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA' , picture: 'test.png'}, 
        {users_id: 1, name: 'Robert', rank: 2, description: "From Home",email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA', picture: 'test.png' },
        {users_id:1, name: 'Tom', rank: 3, description: "Roomate",email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA', picture: 'test.png'}, 
        {users_id:1, name: 'Anne', rank: 4, description: "From College" ,email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA', picture: 'test.png'}, 
        {users_id:1, name: 'Nate', rank: 5, description: "This one is just going to have a bunch of sample text to see how it looks",email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA',picture: 'test.png' }, 
        {users_id:1, name: 'Kyle', rank: 9, description: "test desc " ,email: 'test@gmail.com', phone: '123 456 7890', address : '123 test test ln Test, CA', picture: 'test.png'}, 
      ]);
    });
};
