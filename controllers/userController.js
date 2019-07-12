const config = require('config');
const User = require('../models/User');
const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;


exports.updateUser = (req, res, next) => {
    const userId = req.params.id;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    
    User.findById(userId)
    .then(user => {
        if(!user) {
            return res.send('no user found or not logged in')
        }
    
        user.name = updatedName;
        user.email = updatedEmail;
        return user.save().then(result => {
            console.log('Updated product!');
            res.send(user)
        })
        .catch(err => console.log(err));
    })

}