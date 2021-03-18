const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config')

const createUser = (username, password) => {
    let user = new User({ username, password })

    return user.save()
}

const login = async (username, password) => {
    let user = await User.findOne({username})
    if (!user) {
        throw new mongoose.Error('Invalid Username !')
    }
    let isMuch = await bcrypt.compare(password, user.password)
    if (!isMuch) {
        throw new mongoose.Error('invalid data !')
    }
    let token = jwt.sign({ _id: user._id, username: user.username }, SECRET);
    return token

}

module.exports = {
    createUser,
    login,
}