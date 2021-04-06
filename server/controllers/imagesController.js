const router = require('express').Router();
const isAuth = require('../middlewares/isAuth')
const imageService = require('../services/imageService')

router.get('/getAllImages', (req, res,next) => {
 
    imageService.getAllImages()
        .then(images =>res.send(images))
        .catch(next)
})

router.get('/getFilterImages',(req,res,next)=>{

    imageService.getFilterImages(req.user._id)
        .then(images =>res.send(images))
        .catch(next)
})

router.get('/getOneImage/:id',(req,res,next)=>{
    imageService.getOneImage(req.params.id)
    .then(image =>res.send(image))
        .catch(next)
})

router.post('/addImage', (req, res,next) => {
    const src=req.body.imageUrl;

     imageService.addImage(src,req.user._id)
         .then(image =>res.send('image is save!'))
         .catch(next)
 })

 router.get('/image/delete/:id',isAuth,(req,res,next)=>{
     imageService.getOneAndDelete(req.params.id,req.user._id)
     .then(data=>res.send(data))
     .catch(next)
 })

 router.post('/addImage', (req, res) => {
    const urlImage=req.body.imageURL;
 
     imageService.addImage(urlImage,req.user._id)
         .then(image =>res.send('image is save!'))
         .catch(next)
 })

module.exports = router;