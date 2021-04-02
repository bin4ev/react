const mongoose = require('mongoose');

const { ROUND_SALT } = require('../config/config');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    username: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
         unique: true,
    },
    myImages:[]
        
    

})

userSchema.pre('save', function (next) {

   return bcrypt.hash(this.password,10)
        .then(hash => {
            
            this.password = hash
        }).catch(err=>console.log(err))

})

module.exports = mongoose.model('User', userSchema)