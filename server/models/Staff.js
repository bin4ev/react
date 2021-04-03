const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    name: {
        type: String,
        require: true,
        unique: true,
    },

    description: {
        type: String,
        require: true,
        unique: true,
    },
    imageUrl:{
        type: String,
        require: true,
         unique: true,
    },
    creator:{
        type: String,
        require: true, index:true, unique:true,sparse:true
       
    }

})



module.exports = mongoose.model('Staff', staffSchema)