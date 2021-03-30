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
const edit = async ( _id,name,description,imageUrl)=>{
    let result = await Staff.findByIdAndUpdate(_id,{name,description,imageUrl})
    return result
}
const deleteBarber = async (id)=>{
    let result = await Staff.findByIdAndRemove(id);
    return result
}

module.exports = {
    getStaff,
    addBarber,
    getOne,
    edit,
    deleteBarber,
}