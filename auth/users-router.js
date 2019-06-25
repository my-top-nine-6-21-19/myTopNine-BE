const router = require('express').Router();

const Users = require('./users-model.js');
const checkRoles = require('./checkRole.js')
const restricted = require('./authenticate')

router.get('/', restricted,  checkRoles('Admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({users, user: req.user});
    })
    .catch(err => res.send(err));
});


router.get('/:id', restricted, (req, res)=>{
  Users.findByUser(req.params.id)
      .then(user => {
          if (user){
              res.status(200).json(user);
          } else {
              res.status(404).json({  message: 'user not found' })
          }
      }).catch(err =>{
          res.status(500).json(err)
      })
})

router.post('/',restricted , checkRoles('Admin'), (req, res) => {
  Users.insert(req.body)
      .then(user => {
          res.status(200).json(user);
      })
      .catch(error => {
          res.status(500).json({ message: 'We ran into an error adding the user' });
      });
});

router.delete('/:id', restricted, checkRoles('Admin'), (req, res) => {
  Users.remove(req.params.id)
      .then(user => {
          res.status(200).json(user);
      })
      .catch(error => {
          res.status(500).json({ message: 'We ran into an error deleting the users' });
      });
});

router.put('/:id', restricted, checkRoles('Admin'), (req, res) => {
  Users.update(req.params.id, req.body)
      .then(user => {
          res.status(200).json(user);
      })
      .catch(error => {
          res.status(500).json({ message: 'We ran into an error updating the user' });
      });
});

module.exports = router;
