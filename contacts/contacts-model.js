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

function find(){
    return db ('contacts')
}

function findById(id){
    return db('contacts')
        .where({ id })
        .first();
}


function insert(contact){
    return db('contacts')
    .insert(contact, 'id')
    .then(([id])=>{ 
        return findById(id)
    })
}

function remove(id) {
    return db('contacts')
      .where({ id })
      .del();
  }


  function update(id, changes) {
    return db('contacts')
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
