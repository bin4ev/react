const errorHandler = (err, req, res, next) => {

    err.messages = err.messages || 'Somthing wrong!';
    err.status = err.status || 500;
    console.log(err.messages);

    res.status(err.status).send( err.messages )

}
module.exports = errorHandler