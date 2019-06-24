const express = require('express');
const helmet = require('helmet');
const server = express();

const friendsRouter = require('../friends/friends-router.js')
const contactsRouter = require('../contacts/contacts-router.js')
const usersRouter = require('../auth/users-router.js')
const authRouter = require('../auth/auth-router.js')

server.use(helmet());
server.use(express.json());

server.use('/friends', friendsRouter)
server.use('/contacts', contactsRouter)
server.use('/users', usersRouter)
server.use('/auth', authRouter);

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;