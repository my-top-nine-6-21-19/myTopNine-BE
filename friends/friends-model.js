const knex = require('knex');
const knexConfig = require('../knexfile');
const { findByUser } = require('../auth/users-model.js')
const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    insert,
    remove,
    update,
}

function find() {
    return db('friends')
}

function findById(id) {
    return db('friends')
        .where({ id })
        .first()
}

function insert(friend) {
    return db('friends')
        .insert(friend, "id")
        .then(([id]) => {
            return findById(id)
        })
}

function remove(id) {
    return db('friends')
        .where({ id })
        .del();
}



async function update(id, changes) {
    let old = await findById(id)
    console.log(old.rank)
    const data_update = await db('friends')
        .where({ id })
        .update(changes)
    console.log(data_update)
    if (data_update > 0) {
        const updated = await findById(id)
        console.log('updated', updated.users_id)
        const users = await findByUser(updated.users_id)
        console.log('users,', users)
        users.friends.forEach(user => {
            console.log(user.rank)
            console.log(user.id !== updated.id)
            if (user.rank === updated.rank && user.id !== updated.id) {
                if (old.rank > user.rank) {
                    update(user.id, { ...user, rank: user.rank + 1 })
                } else if (old.rank < user.rank) {
                    update(user.id, { ...user, rank: user.rank - 1 })
                }
            }
        })
        return findById(id);
    } else {
        return null;
    }
}
