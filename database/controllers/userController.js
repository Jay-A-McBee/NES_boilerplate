const User = require('../models').User;

module.exports = {
    create: (req, res) => {
        User.create({
            name: req.body.name
        }).then(user => {
            console.log(user)
            res.status(201).send(user)
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        });
    }
};