const mongoose = require('mongoose');

const Appointment= require('../models/Appointment');

const addAppointment = async (name, phone, service, barber )=>{
let appointment =  await  new Appointment({name, phone, service, barber });

return appointment.save();

}

module.exports = {
    addAppointment,
   
}