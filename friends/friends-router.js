const router = require('express').Router()
const Friends = require('./friends-model.js')

const restricted = require('../auth/authenticate.js')

router.get('/',  (req, res) => {
    Friends.find()
        .then(friends => {
            res.status(200).json(friends);
        }).catch(err => {
            res.status(500).json({ message: 'error getting friends' })

        })
})



router.get('/:id', (req, res) => {
    Friends.findById(req.params.id)
        .then(friend => {
            if (friend) {
                res.status(200).json(friend);
            } else {
                res.status(404).json({ message: 'Friend not found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/',restricted , (req, res) => {
    Friends.insert(req.body)
        .then(friend => {
            res.status(200).json(friend);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error adding the friend' });
        });
});

router.delete('/:id', restricted, (req, res) => {
    Friends.remove(req.params.id)
        .then(friend => {
            res.status(200).json(friend);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the friend' });
        });
});

router.put('/:id', restricted, (req, res) => {
    Friends.update(req.params.id, req.body)
        .then(friend => {
            res.status(200).json(friend);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error updating the friend' });
        });
});


module.exports = router;