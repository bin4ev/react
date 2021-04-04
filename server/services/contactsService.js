
const mongoose = require('mongoose');
const Feedback = require('../models/feedback');

const addInfo =async(username,useremail,usermessage)=>{

    let  comment = await new Feedback({username,useremail,usermessage})
    return comment.save()
}
module.exports={
    addInfo,
}