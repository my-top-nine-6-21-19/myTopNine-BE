const knex = require('knex');
const knexConfig = require('../knexfile');

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

function findById(id){
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

function update(id, changes) {
    return db('friends')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}
