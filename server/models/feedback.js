const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    username: {
        type: String,
        require: true,
        index:true, unique:true,sparse:true
    },

    useremail: {
        type: String,
        require: true,
        unique: true,
    },
    usermessage:{
        type: String,
        require: true,
        index:true, unique:true,sparse:true
    },
  

})



module.exports = mongoose.model('Feedback', feedbackSchema)