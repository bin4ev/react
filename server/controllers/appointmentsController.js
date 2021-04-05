
const router = require('express').Router();
const isAuth= require('../middlewares/isAuth')
const { addAppointment,getAll } = require('../services/appointmentsService');


router.post('/save', (req, res,next) => {
    const { name, phone, service, barber } = req.body

    addAppointment(name, phone, service, barber)
        .then(respond => res.send('You set appointment!'))
        .catch(next)

})

router.get('/getAll',isAuth,(req,res)=>{
    console.log(req.user.username);
getAll(req.user.username)
.then(appointments=>res.send(appointments))
.catch(next)
})

module.exports = router;