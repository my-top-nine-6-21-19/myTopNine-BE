const router = require('express').Router()
const Friends = require('./friends-model.js')

router.get('/', (req, res) => {
    Friends.find()
        .then(friends => {
            res.status(200).json(friends);
        }).catch(err => {
            res.status(500).json({ message: 'error getting friends' })
        })
})

module.exports = router;