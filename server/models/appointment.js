const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    name: {
        type: String,
        require: true,
   
    },

    phone: {
        type: Number,
        require: true,
     
    },
    service:{
        type: String,
        require: true,
         
      
    },
    barber:{
        type: String,
        require: true,
      
    }

})



module.exports = mongoose.model('Appointment', appointmentSchema)