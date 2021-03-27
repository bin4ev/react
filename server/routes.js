const router = require('express').Router();
const userController = require('./controllers/userController');
const staffController = require('./controllers/staffController')
const addImageController= require('./controllers/addImageController')
router.use('/user', userController);
router.use('/staff',staffController);
router.use('/imageGalery',addImageController);

module.exports = router;