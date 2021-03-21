const mongoose = require('mongoose');
const Staff = require('../models/Staff')

const User = require('../models/User')

const getStaff = async ()=>{
let staff =  await  Staff.find({})
return staff

}
module.exports = {
    getStaff,
}