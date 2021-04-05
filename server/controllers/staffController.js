const router = require('express').Router();
const staffService = require('../services/staffService')
const isAuth= require('../middlewares/isAuth')

router.get('/all', (req, res,next) => {
    staffService.getStaff()
        .then(data => res.json(data))
        .catch(next)
})

router.post('/addBarber', (req, res,next) => {
  
    const { name, description, imageUrl } = req.body;

    staffService.addBarber(
        name,
        description,
        imageUrl,
        req.user._id,
    )
        .then(barber => res.send(barber))
        .catch(next)
})

router.get('/barber/:id', (req, res,next) => {

    staffService.getOne(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(next)
})

router.post('/barber/edit', isAuth, (req, res,next) => {

    const {_id, name, description, imageUrl } = req.body;

    staffService.edit(_id,name, description, imageUrl,req.user._id)
        .then(result => res.send(result))
        .catch(next)
})

router.get('/barber/delete/:id',isAuth,(req,res,next)=>{

    staffService.deleteBarber(req.params.id,req.user._id)
    .then(result => res.send(result))
    .catch(next)
})

module.exports = router;