const knex = require('knex');
const knexConfig = require('../knexfile');

const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    insert,
    remove,
    update
}

function find() {
    return db('friends')
}

async function findById(id) {
    let friend = await db('friends')
        .where({ id })
        .first()
    let contacts = await getFriendContacts(id)
    if (friend){
       return { ...friend, contacts } 
    }else {
        return null
    }
    
}


function getFriendContacts(friend_id) {
    return db('contacts')
        .where({ friend_id })
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
