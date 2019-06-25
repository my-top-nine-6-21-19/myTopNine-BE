const router = require('express').Router();

const Users = require('./users-model.js');


router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


router.get('/:id', (req, res)=>{
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

module.exports = router;
