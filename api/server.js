const express = require('express');
const helmet = require('helmet');
const server = express();

const friendsRouter = require('../friends/friends-router.js')
const contactsRouter = require('../contacts/contacts-router.js')

server.use(helmet());
server.use(express.json());

server.use('/friends', friendsRouter)
server.use('/contacts', contactsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;