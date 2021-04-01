const router = require('express').Router();
const userService = require('../services/UserService')

router.post('/register', (req, res) => {
    const { username, password, repeatPassword } = req.body;
    //validate passwords
    userService.createUser(username, password)
        .then(user =>
            res.json(user))
        .catch(err =>res.sent(err))
})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    userService.login(username, password)
        .then(token => res.json(token))
        .catch(err => res.send(err))
})
module.exports = router;