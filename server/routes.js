const router = require('express').Router();
const userController = require('./controllers/userController');
const staffController = require('./controllers/staffController')
const addImageController= require('./controllers/addImageController')
const getAllImagesController = require('./controllers/getAllImagesControler')

router.use('/user', userController);
router.use('/staff',staffController);
router.use('/imageGallery',addImageController);
router.use('/imageGallery',getAllImagesController);

module.exports = router;