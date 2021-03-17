const mongoose = require('mongoose');
const User = require('../models/User');

const createUser =(username,password)=>{
let user = new User({username,password})

 return user.save()
}

module.exports ={
    createUser,
}