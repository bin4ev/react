const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const contactsService = require('../services/contactsService');

router.post('/save', (req, res,next) => {
    const{username,useremail,usermessage}=req.body;

     contactsService.addInfo(username,useremail,usermessage)
         .then(respond =>res.send('Info is save!'))
         .catch(next)
 })

 router.get('/all',isAuth,(req,res,next)=>{

    contactsService.getAll(req.user.role)
    .then(data=>res.send(data))
    .catch(next)
 })

 router.get('/delete/:id',(req,res,next)=>{
 
     contactsService.deleteOne(req.params.id)
     .then(res=>res.send('Comment is deleted !'))
     .catch(next)
 })
 module.exports = router;