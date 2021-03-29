const router = require('express').Router();
const { json } = require('express');
const staffService = require('../services/staffService')

router.get('/all', (req, res) => {
    staffService.getStaff()
        .then(staff =>JSON.stringify(staff))
        .then(data=>res.send(data))
        .catch(err => console.log(err))
})

router.post('/addBarber', (req, res) => {
    const {name,description,imageUrl}=req.body;
    
     staffService.addBarber({
         name,
        description,
        imageUrl})
         .then(barber =>res.send('barber is save!'))
         .catch(err => console.log(err))
 })

 router.get('/barber/:id', (req, res) => {

 
    
         staffService.getOne(req.params.id)
        .then(data=>{
            res.send(data) })
        .catch(err => console.log(err))
})

module.exports = router;