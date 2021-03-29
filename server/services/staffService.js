const mongoose = require('mongoose');
const Staff = require('../models/Staff');


const getStaff = async () => {
    let staff = await Staff.find({});
    return staff;

}

const addBarber = async (
    name,
    description,
    imageUrl) => {

    let member = await new Staff(
        name,
        description,
        imageUrl
    )

    return member.save();
}

const getOne = async (barberId)=>{
 
    let barberData = await Staff.findById(barberId);

return barberData;
}

module.exports = {
    getStaff,
    addBarber,
    getOne,
}