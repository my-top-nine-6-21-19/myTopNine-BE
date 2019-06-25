const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  insert,
  findByUser,

};

function find() {
  return db('users').select('id', 'username', 'password');
}

async function findByUser(id) {
  let user = await db('users')
    .where({ id })
    .first();
  let friends = await getUserFriends(id)
  if (user) {
    return { ...user, friends }
  } else {
    return null
  }
}

function getUserFriends(users_id) {
  return db('friends')
    .where({ users_id })
}

function getFriendContacts(friend_id) {
  return db('contacts')
      .where({ friend_id })
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function insert(user) {
  return db('users')
    .insert(user, "id")
    .then(([id]) => {
      return findById(id)
    })
}
