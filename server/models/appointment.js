const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    name: {
        type: String,
        require: true,
        unique: true,
    },

    phone: {
        type: Number,
        require: true,
         unique: true,
    },
    service:{
        type: String,
        require: true,
         unique: true,
    },
    barber:{
        type: String,
        require: true,
         unique: true,
    }

})



module.exports = mongoose.model('Appointment', appointmentSchema)