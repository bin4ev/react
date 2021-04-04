const router = require('express').Router();

const userController = require('./controllers/userController');
const staffController = require('./controllers/staffController');
const imagesController = require('./controllers/imagesController');
const appointmentsController = require ('./controllers/appointmentsController');
const contactsController= require('./controllers/contactsController');

router.use('/user', userController);
router.use('/staff',staffController);
router.use('/imageGallery',imagesController);
router.use('/appointmets',appointmentsController);
router.use('/contacts',contactsController)

module.exports = router;