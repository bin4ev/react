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
    }

})



module.exports = mongoose.model('Staff', staffSchema)