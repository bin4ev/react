
const mongoose = require('mongoose');
const Feedback = require('../models/feedback');

const addInfo = async (username, useremail, usermessage) => {
    try {
        let comment = await new Feedback({ username, useremail, usermessage })
        return comment.save()
    } catch (error) {
        return error
    }
}

const getAll= async(role)=>{
  
    try {
        if(role=='admin'){
            let allComments = await Feedback.find({})
            return allComments
        }
    } catch (error) {
        return eroor
    }
}
const deleteOne = async (commentId)=>{
  
    
            let result= await Feedback.findByIdAndRemove(commentId)
            return result
    
        
    
}

module.exports = {
    addInfo,
    getAll,
    deleteOne,
}