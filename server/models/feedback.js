const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    username: {
        type: String,
        require: true,
     
    },

    useremail: {
        type: String,
        require: true,
   
    },
    usermessage:{
        type: String,
        require: true,
 
    },
  

})



module.exports = mongoose.model('Feedback', feedbackSchema)