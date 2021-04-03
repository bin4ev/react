const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    name: {
        type: String,
        require: true,
        index:true, unique:true,sparse:true
    },

    phone: {
        type: Number,
        require: true,
         unique: true,
    },
    service:{
        type: String,
        require: true,
         
         index:true, unique:true,sparse:true
    },
    barber:{
        type: String,
        require: true,
        index:true, unique:true,sparse:true
    }

})



module.exports = mongoose.model('Appointment', appointmentSchema)