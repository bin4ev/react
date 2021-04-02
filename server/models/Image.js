const mongoose = require('mongoose');


const AddImageSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,


    src:{
        type: String,
        require: true,
     
    },
    user: {

        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true,
        
    },

})



module.exports = mongoose.model('Image', AddImageSchema)