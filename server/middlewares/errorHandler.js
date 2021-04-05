const errorHandler = (err, req, res, next) => {

    err.messages = err.messages || 'Something wrong !!!';
    err.status = err.status || 500;
    console.log(err.messages);

    res.status(err.status).send( { error: err })

}
module.exports = errorHandler