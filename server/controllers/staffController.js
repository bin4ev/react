const router = require('express').Router();
const staffService = require('../services/staffService')
const isAuth= require('../middlewares/isAuth')
router.get('/all', (req, res) => {
    staffService.getStaff()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.post('/addBarber', (req, res) => {
  
    const { name, description, imageUrl } = req.body;

    staffService.addBarber(
        name,
        description,
        imageUrl,
        req.user._id,
    )
        .then(barber => res.send(barber))
        .catch(err =>console.log(err))
})

router.get('/barber/:id', (req, res) => {

    staffService.getOne(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err))
})

router.post('/barber/edit', isAuth, (req, res) => {

    const {_id, name, description, imageUrl } = req.body;

    staffService.edit(_id,name, description, imageUrl,req.user._id)
        .then(result => res.send(result))
        .catch(err => console.log(err))
})

router.get('/barber/delete/:id',isAuth,(req,res)=>{

    staffService.deleteBarber(req.params.id,req.user._id)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

module.exports = router;