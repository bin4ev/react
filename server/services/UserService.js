const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');
const { ADMIN_NAME } = require('../config/config');

const createUser = async (username, password) => {
    try {
        let user = await new User({ username, password })
        return user.save()
    } catch (error) {
        return error
    }

}

const login = async (username, password) => {
    try {
        let user = await User.findOne({ username })
        if (!user.username) {
            throw Error('Invalid Username !')
        }
        
        let isMuch = await bcrypt.compare(password, user.password)
        if (!isMuch) {
            throw new mongoose.Error('invalid data !')
        }

        let checkIsAdmin = user.username.slice(user.username.length - 5)
        if (checkIsAdmin === ADMIN_NAME) {
            let token = jwt.sign({ _id: user._id, username: user.username, role: 'admin' }, SECRET);
            return token
        } else {
            let token = jwt.sign({ _id: user._id, username: user.username, role: 'user' }, SECRET);
            return token
        }

    } catch (error) {
        throw error
    }



}

module.exports = {
    createUser,
    login,
}