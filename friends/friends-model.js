const knex = require('knex');
const knexConfig = require('../knexfile');

const db = require('../data/dbConfig.js')

module.exports = {
    find
}

function find() {
    return db('friends')
}