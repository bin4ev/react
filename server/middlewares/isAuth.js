

module.exports = (req, res, next) => {
    if (!req.user) {
        return new Error('You are unauthorized!');
    }
    next()
}