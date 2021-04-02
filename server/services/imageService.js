const mongoose = require('mongoose');


const Image= require('../models/Image');

const addImage = async (urlImage, userId)=>{
let image =  await  new Image({src:urlImage,user:userId});

return image.save();

}

const getAllImages= async()=>{
const images = await Image.find({});
return images;
}
module.exports = {
    addImage,
    getAllImages,
}