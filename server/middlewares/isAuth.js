

module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send(json({message : 'You are not authorized'}))
    }
    next()
}