const User = require('../models').User;

module.exports = {
    create: (req, res) => {
        return User.create({
            first: req.body.first,
            last: req.body.last,
            username: req.body.username
        }).then(user => {
            return res.status(200).send(user)
        })
        .catch(error => {
            console.error(error)
            return res.status(400).send(error)
        });
    }
};