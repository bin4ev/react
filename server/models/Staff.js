const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    name: {
        type: String,
        require: true,
       
    },

    description: {
        type: String,
      

    },
    imageUrl: {
        type: String,
        require: true,
        
    },
    creator: {
        type: String,
       

    }

})



module.exports = mongoose.model('Staff', staffSchema)