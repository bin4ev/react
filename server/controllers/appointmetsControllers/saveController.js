
const router = require('express').Router();
const { addAppointment } = require('../../services/appointmentsService');


router.post('/save', (req, res) => {
    const { name, phone, service, barber } = req.body

    addAppointment(name, phone, service, barber)
        .then(respond => res.send('You set appointment!'))
        .catch(err => console.log(err))

})
module.exports = router;