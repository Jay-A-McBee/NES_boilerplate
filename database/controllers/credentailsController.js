import Credentials from '../models/credentials';


module.exports = {
    create(req, res) {
        return Credentials.create({
            username: req.body.username,
            password: req.body.password
        })
    }
};