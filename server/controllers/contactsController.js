const router = require('express').Router();
const contactsService = require('../services/contactsService');

router.post('/save', (req, res) => {
    const{username,useremail,usermessage}=req.body;

     contactsService.addInfo(username,useremail,usermessage)
         .then(respond =>res.send('Info is save!'))
         .catch(err => console.log(err))
 })
 module.exports = router;