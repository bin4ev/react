const errorHandler = (err, req, res, next) => {

    err.messages = err.messages || 'Somthing wrong!';
    err.status = err.status || 500;
    console.log(err);

    res.status(err.status).send( err )

}
module.exports = errorHandler