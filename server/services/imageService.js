const mongoose = require('mongoose');


const Image= require('../models/Image');

const addImage = async (urlImage, userId)=>{
let image =  await  new Image({src:urlImage,userCreator:userId});

return image.save();
}

const getAllImages= async()=>{
const images = await Image.find({});
return images;
}

const getFilterImages= async(creatorId)=>{
const images = await Image.find({userCreator:`${creatorId}`})
return images
}

const getOneImage = async(id)=>{
const image = await Image.findById(id)

return image
}

const getOneAndDelete= async (id,createrID)=>{
    const image = await Image.findById(id)
    if(image.userCreator==createrID){
        const result =await Image.findByIdAndDelete(id)
        return result
    }else{
        return new Error('you are not autorized!')
    }

}


module.exports = {
    addImage,
    getAllImages,
    getFilterImages,
    getOneImage,
getOneAndDelete,
}