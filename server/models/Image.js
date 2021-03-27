const mongoose = require('mongoose');


const AddImageSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,


    imageUrl:{
        type: String,
        require: true,
     
    }

})



module.exports = mongoose.model('Image', AddImageSchema)