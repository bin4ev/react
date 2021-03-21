const router = require('express').Router();
const userController = require('./controllers/userController');
const staffController = require('./controllers/staffController')
router.use('/user', userController)
router.use('/staff',staffController)

module.exports = router;