const router = require('express').Router();
const userController = require('./controllers/userController');

const staffController = require('./controllers/staffController');

const addImageController= require('./controllers/galleryControllers/addImageController');
const getAllImagesController = require('./controllers/galleryControllers/getAllImagesController');

const appointmentsController = require ('./controllers/appointmentsController');

router.use('/user', userController);
router.use('/staff',staffController);
router.use('/imageGallery',addImageController);
router.use('/imageGallery',getAllImagesController);
router.use('/appointmets',appointmentsController);

module.exports = router;