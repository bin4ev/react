const errorHandler = (err, req, res, next) => {

    err.messages = err.messages || 'Something get wrong !!!';
    err.status = err.status || 500;
    console.log(err);

    res.status(err.status).send('404-and-notifications', { error: err })

}
module.exports = errorHandler