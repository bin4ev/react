const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/config');

module.exports = function () {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }

                req.user = user;
            
            });
        }/*  else {
            res.sendStatus(401);
        } */    next();
    }

}
