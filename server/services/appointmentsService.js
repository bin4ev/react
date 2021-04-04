const mongoose = require('mongoose');

const Appointment = require('../models/Appointment');

const addAppointment = async (name, phone, service, barber) => {

    try {
        let appointment = await new Appointment({ name, phone, service, barber });
        return appointment.save();
    } catch (error) {
        return error
    }
}

const getAll= async (username)=>{

try {
    let appointments = await Appointment.find({barber:`${username}`})
   
    return appointments
} catch (error) {
    return error
}
}

module.exports = {
    addAppointment,
    getAll,

}