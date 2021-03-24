const router = require('express').Router();
const { json } = require('express');
const staffService = require('../services/staffService')

router.get('/*', (req, res) => {
    staffService.getStaff()
        .then(staff =>JSON.stringify(staff))
        .then(data=>res.send(data))
        .catch(err => console.log(err))
})

module.exports = router;