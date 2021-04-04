const router = require('express').Router();
const userService = require('../services/UserService')


router.post('/register', (req, res,next) => {
    const { username, password, repeatPassword } = req.body;
    //validate passwords
    userService.createUser(username, password)
        .then(user =>
            res.json(user))
        .catch(next)
})

router.post('/login', (req, res,next) => {
    const { username, password } = req.body;
    userService.login(username, password)
        .then(token => {
            res.json(token)
        })
        .catch(next)
})
module.exports = router;