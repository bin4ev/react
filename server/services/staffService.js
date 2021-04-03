const mongoose = require('mongoose');
const Staff = require('../models/Staff');


const getStaff = async () => {
    let staff = await Staff.find({});
    return staff;

}

const addBarber = async (
    name,
    description,
    imageUrl,
    creator) => {

    let member = await new Staff(
      { name,
        description,
        imageUrl,
        creator,}
    )

    return member.save();
}

const getOne = async (barberId,) => {

    let barberData = await Staff.findById(barberId);

    return barberData;
}

const edit = async (_id, name, description, imageUrl, userId) => {
    
    let barber = await Staff.findById(_id);
    if (barber.creator === userId) {
        let result = await Staff.findByIdAndUpdate(_id, { name, description, imageUrl })
     
        return result
    }return  new mongoose.Error ({message:'You are not authorized!'}) 
}

const deleteBarber = async (_id,userId) => {
    let barber = await Staff.findById(_id);
    if (barber.creator === userId) {
        let result = await Staff.findByIdAndRemove(_id);
        return result
    }
    throw  new mongoose.Error ('You are not authorized!') 
   
}

module.exports = {
    getStaff,
    addBarber,
    getOne,
    edit,
    deleteBarber,
}