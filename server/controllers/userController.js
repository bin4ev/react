const router = require('express').Router();
const userService = require('../services/UserService')

router.post('/register', (req, res) => {
  
    const { username, password, repeatPassword } = req.body;
    //validate passwords

    userService.createUser(username, password)
    .then(user=>
    res.send(user))
    .catch(err=>console.log(err))
        
 
   
})

module.exports = router;