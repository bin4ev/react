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
    },
    imageUrl: {
        type: String,
        require: true,

    },
    creator: {
        type: String,


    },



})



module.exports = mongoose.model('Staff', staffSchema)