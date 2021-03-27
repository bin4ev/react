const router = require('express').Router();

const imageService = require('../services/ImageService')

router.post('/addImage', (req, res) => {
   const urlImage=req.body.imageURL;
    imageService.addImage(urlImage)
        .then(image =>res.send('image is save!'))
        .catch(err => console.log(err))
})

module.exports = router;