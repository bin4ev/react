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
    console.log(creatorId);
const images = await Image.find({userCreator:`${creatorId}`})
console.log(images);
return images
}

module.exports = {
    addImage,
    getAllImages,
    getFilterImages,
}