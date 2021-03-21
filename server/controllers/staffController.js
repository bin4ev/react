const router = require('express').Router();
const staffService = require('../services/staffService')

router.get('/*', (req, res) => {
    staffService.getStaff()
        .then(staff => staff.json())
        .catch(err => console.log(err))
})

module.exports = router;