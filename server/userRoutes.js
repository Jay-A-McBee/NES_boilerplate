const express = require('express');
const userController = require('../database/controllers/userController');

const userRouter = express.Router();

userRouter.post('/create_account', (req, res, next) => {
    try{
        return userController.create(req, res);
    }catch(e){
        res.status(500).send({error: e});
    }
})

module.exports = userRouter;

