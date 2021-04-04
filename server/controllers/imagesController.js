const router = require('express').Router();
const isAuth = require('../middlewares/isAuth')
const imageService = require('../services/imageService')

router.get('/getAllImages', (req, res) => {
 
    imageService.getAllImages()
        .then(images =>res.send(images))
        .catch(err => console.log(err))
})

router.get('/getFilterImages',(req,res)=>{

    imageService.getFilterImages(req.user._id)
        .then(images =>res.send(images))
        .catch(err => console.log(err))
})

router.get('/getOneImage/:id',(req,res)=>{
    imageService.getOneImage(req.params.id)
    .then(image =>res.send(image))
        .catch(err => console.log(err))
})

router.post('/addImage', (req, res) => {
    const urlImage=req.body.imageURL;
 
     imageService.addImage(urlImage,req.user._id)
         .then(image =>res.send('image is save!'))
         .catch(err => console.log(err))
 })

 router.get('/image/delete/:id',isAuth,(req,res)=>{
     imageService.getOneAndDelete(req.params.id,req.user._id)
     .then()
     .catch(err=>console.log(err))
 })

 router.post('/addImage', (req, res) => {
    const urlImage=req.body.imageURL;
 
     imageService.addImage(urlImage,req.user._id)
         .then(image =>res.send('image is save!'))
         .catch(err => console.log(err))
 })

module.exports = router;