const router = require('express').Router();
const Contacts = require('./contacts-model.js');

router.get('/', (req, res) => {
    Contacts.find()
        .then(contacts => {
            res.status(200).json(contacts);
        }).catch(err => {
            res.status(500).json({ message: 'error getting contacts' })
        })
})

router.get('/:id', (req, res) => {
    Contacts.findById(req.params.id)
        .then(contact => {
            if (contact) {
                res.status(200).json(contact);
            } else {
                res.status(404).json({ message: 'contact not found' });
            }

        }).catch(err => {
            res.status(500).json({ message: 'error getting contact' })
        })
})

router.post('/', (req, res) => {
    Contacts.insert(req.body)
        .then(contact => {
            res.status(200).json(contact);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error adding the contact' });
        });
});

router.delete('/:id', (req, res) => {
    Contacts.remove(req.params.id)
        .then(contact => {
            res.status(200).json(contact);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the contact' });
        });
});

router.put('/:id', (req, res) => {
    Contacts.update(req.params.id, req.body)
        .then(contact => {
            res.status(200).json(contact);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error updating the contact' });
        });
});


module.exports = router;