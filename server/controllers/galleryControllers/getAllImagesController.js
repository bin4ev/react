const router = require('express').Router();

const imageService = require('../../services/imageService')

router.get('/getAllImages', (req, res) => {
 
    imageService.getAllImages()
        .then(images =>res.send(images))
        .catch(err => console.log(err))
})

module.exports = router;