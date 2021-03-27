const mongoose = require('mongoose');


const Image= require('../models/Image')

const addImage = async (urlImage)=>{
let image =  await  new Image({imageUrl:urlImage})

return image.save()

}
module.exports = {
    addImage,
}